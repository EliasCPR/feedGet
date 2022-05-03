import { CloseButton } from "../CloseButton";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImgUrl,
      alt: "imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImgUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImgUrl,
      alt: "imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null)  

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedBackTypeChanged={setFeedBackType} />
      ):(
        <FeedbackContentStep feedbackType={feedbackType}/>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela {" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
