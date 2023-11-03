import Image from "next/image";
import { Inter } from "next/font/google";
import imageMain from "@/public/main-image.jpg";
import imageBoat from "@/public/boat.svg";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const inter = Inter({ subsets: ["latin"] });

interface Question {
  title: React.ReactNode;
  answers: Answer[];
}
interface Answer {
  title: React.ReactNode;
  isCorrect: boolean;
}

interface Entity {
  title: string;
  icon: string;
  match: string[];
  errorMessage?: string
}

type Stage = "stop" | "sail";
type Side = "left" | "right";

export default function Home() {
  const [leftSideRef] = useAutoAnimate();
  const [boatRef] = useAutoAnimate();
  const [rightSideRef, enableAnimations] = useAutoAnimate();
  const entities: Entity[] = [
    {
      title: "Крестьянин",
      icon: "🧍",
      match: [],
    },
    {
      title: "Волк",
      icon: "🐺",
      match: ["Коза"],
      errorMessage: "Волк съел козу 🥺",
    },
    {
      title: "Коза",
      icon: "🐐",
      match: ["Капуста"],
      errorMessage: "Коза съела капусту 🥺",
    },
    {
      title: "Капуста",
      icon: "🥦",
      match: ["Коза"],
      errorMessage: "Коза съела капусту 🥺",
    },
  ];

  const question: Question = {
    title: (
      <p>
        На одном берегу реки находятся крестьянин, волк, коза и капуста. У крестьянина есть лодка, но видимо не очень хорошая. Он может взять с собой в плавание только один «предмет», в смысле только
        козу или только капусту или только волка. Проблема в том, что кое-кого нельзя оставлять наедине с желанной пищей. Например, нельзя уплыть оставив волка и козу на одном берегу – волк съест
        козу. Или нельзя уплыть с волком, оставив козу и капусту – ведь коза съест капусту. Но крестьянину нужно непременно попасть на другой берег. Вот такой он упертый. И хочет он довезти всех в
        сохранности.
      </p>
    ),
    answers: [
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с капусты:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести капусту на правый берег.</li>
              <li>Вернуться на левый берег без капусты.</li>
              <li>Перевести козу на правый берег.</li>
              <li>Взять капусту и вернуться на левый берег.</li>
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести капусту на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: false,
      },
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с волка:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести козу на правый берег.</li>
              <li>Взять волка и вернуться на левый берег.</li>
              <li>Перевести капусту на правый берег.</li>
              <li>Вернуться на левый берег без капусты.</li>
              <li>Перевести волка на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: false,
      },
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с козы:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести козу на правый берег.</li>
              <li>Вернуться на левый берег без козы.</li>
              <li>Перевести капусту на правый берег.</li>
              <li>Взять козу и вернуться на левый берег.</li>
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести козу на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: false,
      },
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с волка:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести капусту на правый берег.</li>
              <li>Взять волка и вернуться на левый берег.</li>
              <li>Перевести козу на правый берег.</li>
              <li>Вернуться на левый берег без козы.</li>
              <li>Перевести волка на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: false,
      },
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с волка:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести козу на правый берег.</li>
              <li>Взять волка и вернуться на левый берег.</li>
              <li>Перевести капусту на правый берег.</li>
              <li>Вернуться на левый берег без капусты.</li>
              <li>Перевести волка на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: true,
      },
      {
        title: (
          <button>
            <p className="text-bold uppercase mb-1">Начать с капусты:</p>
            <ul className="list-decimal text-left list-inside">
              <li>Перевести капусту на правый берег.</li>
              <li>Вернуться на левый берег без капусты.</li>
              <li>Перевести козу на правый берег.</li>
              <li>Взять капусту и вернуться на левый берег.</li>
              <li>Перевести волка на правый берег.</li>
              <li>Вернуться на левый берег без волка.</li>
              <li>Перевести капусту на правый берег.</li>
            </ul>
          </button>
        ),
        isCorrect: false,
      },
    ],
  };
  const router = useRouter();
  const [currentSide, setCurrentSide] = useState<Side>("left");
  const [boat, setBoat] = useState<Entity[]>([]);
  const [leftSide, setLeftSide] = useState<Entity[]>(entities);
  const [rightSide, setRightSide] = useState<Entity[]>([]);

  const onPutBoat = (entity: Entity) => {
    if (boat.length >= 2) return;
    if (currentSide === "left") {
      const filtered = leftSide.filter((item) => item.title !== entity.title);
      setLeftSide(filtered);
      setBoat((prev) => [...prev, entity]);
    }
    if (currentSide === "right") {
      const filtered = rightSide.filter((item) => item.title !== entity.title);
      setRightSide(filtered);
      setBoat((prev) => [...prev, entity]);
    }
  };

  const onGetBoat = (entity: Entity) => {
    if (currentSide === "left") {
      const filtered = boat.filter((item) => item.title !== entity.title);
      setBoat(filtered);
      setLeftSide((prev) => [...prev, entity]);
    }
    if (currentSide === "right") {
      const filtered = boat.filter((item) => item.title !== entity.title);
      setBoat(filtered);
      setRightSide((prev) => [...prev, entity]);
    }
  };

  const onResetGame = () => {
    router.reload();
  };

  const onSailBoatToSide = () => {
    if (!boat.find((search) => search.title.includes("рестьянин"))) return;
    if (currentSide === "left") setCurrentSide("right");
    if (currentSide === "right") setCurrentSide("left");
  };

  useEffect(() => {
    if (currentSide === "right") {
      leftSide.forEach((element) => {
        element.match.forEach((matchElement) => {
          if (leftSide.find((search) => search.title === matchElement)) {
            alert(`${element.errorMessage}`);
            onResetGame();
          }
        });
      });
    }
    if (currentSide === "left") {
      rightSide.forEach((element) => {
        element.match.forEach((matchElement) => {
          if (rightSide.find((search) => search.title === matchElement)) {
            alert(`${element.errorMessage}`);
            onResetGame();
          }
        });
      });
    }
  }, [currentSide, leftSide, rightSide]);

  useEffect(() => {
    if (rightSide.length === 4) {
      alert("Победа! 🎖️");
    }
  }, [rightSide]);

  return (
    <div className="container space-y-2 max-w-[800px] mx-auto p-4">
      <Image width={imageMain.width} height={imageMain.height} alt="Главное изображение" className="w-full h-auto rounded-md object-cover" unoptimized src={imageMain.src} />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Игра &quot; Коза, капуста и волк &quot;</h1>
        {question.title}
        <button
          onClick={onResetGame}
          className="inline-flex transition-all duration-300 items-center space-x-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          <span>Начать заново</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <div className="min-h-[300px] flex gap-2">
          <div
            className={clsx("border-[1px] space-y-2 border-black p-2 w-[200px] min-w-[200px]", {
              "pointer-events-none": currentSide === "right",
            })}
          >
            <p className="font-bold">Берег А</p>
            <div ref={leftSideRef} className="space-y-1">
              {leftSide.map((item) => {
                return (
                  <button onClick={() => onPutBoat(item)} key={item.title} className="flex items-end space-x-1 px-2 py-1 bg-gray-100 rounded-lg">
                    {item.icon} {item.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-[1px] border-black p-2 flex-1">
            <div
              className={clsx("w-[100px] transition-all duration-300", {
                "ml-auto": currentSide === "right",
                "mr-auto": currentSide === "left",
              })}
              ref={boatRef}
            >
              <img width={imageBoat.width} height={imageBoat.height} alt="Иконка лодки" src={imageBoat.src} />
              <div className="flex mb-1 bg-gray-200 rounded-md items-center space-x-1">
                {boat.map((item) => {
                  return (
                    <button onClick={() => onGetBoat(item)} className="p-1" key={item.title}>
                      {item.icon}
                    </button>
                  );
                })}
              </div>
              <button onClick={onSailBoatToSide} className={clsx("bg-gray-200 rounded-md w-full inline-flex items-center p-1", {})}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={clsx("w-6 h-6 transition-all duration-300", {
                    "rotate-[180deg]": currentSide === "left",
                  })}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={rightSideRef}
            className={clsx("border-[1px] space-y-2 border-black p-2 w-[200px] min-w-[200px]", {
              "pointer-events-none": currentSide === "left",
            })}
          >
            <p className="font-bold">Берег Б</p>
            <div className="space-y-1">
              {rightSide.map((item) => {
                return (
                  <button onClick={() => onPutBoat(item)} key={item.title} className="flex items-end space-x-1 px-2 py-1 bg-gray-100 rounded-lg">
                    {item.icon} {item.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
