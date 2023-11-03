import Image from "next/image";
import { Inter } from "next/font/google";
import mainImage from "@/public/main-image.jpg";
import { useEffect, useState } from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

interface Question {
  title: React.ReactNode;
  answers: Answer[];
}
interface Answer {
  title: React.ReactNode;
  isCorrect: boolean;
}

export default function Home() {
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
  const [selected, setSelected] = useState<Answer | null>(null);
  const onSelectAnswer = (answer: Answer) => setSelected(answer);

  useEffect(() => {
    if (selected && !selected.isCorrect) {
      alert("Неверно!");
      setSelected(null);
    }
    if (selected && selected.isCorrect) {
      alert("Верно!");
      setSelected(null);
    }
  }, [selected]);

  return (
    <div className="container space-y-2 max-w-[800px] mx-auto p-4">
      <Image width={mainImage.width} height={mainImage.height} alt="" className="w-full h-auto rounded-md object-cover" unoptimized src={mainImage.src} />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Игра "Коза, капуста и волк"</h1>
        <p>{question.title}</p>
        <div className="grid grid-cols-2 gap-1">
          {question.answers.map((item, indx) => {
            return (
              <div
                key={indx}
                onClick={() => onSelectAnswer(item)}
                className={clsx("h-full text-left bg-transparent font-semibold hover:border-blue-500 hover:bg-blue-500 hover:text-white transition-all py-2 px-4 border rounded", {
                  "order-blue-500 text-blue-700 border-blue-500": !selected,
                  "border-red-500 text-red-700": selected?.isCorrect === false,
                  "border-green-500 text-green-700": selected?.isCorrect === true && item.title === selected.title,
                })}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
