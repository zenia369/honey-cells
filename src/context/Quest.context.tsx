import { FC, ReactNode, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface QuestContextProviderProps {
  children: ReactNode;
  nextRoute: string;
  steps: (string | null)[];
  validator: <T>(value: T) => boolean;
}

interface QuestContext {
  validateAnswer: <T = string>(value: T) => void;
  curentStep: string | null;
  stepIndex: number;
}

const QuestContext = createContext<null | QuestContext>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestContext = () => {
  const context = useContext(QuestContext);
  if (!context)
    throw new Error(
      "[QuestContext]: hook useQuestContext called outside context"
    );

  return context;
};

export const QuestContextProvider: FC<QuestContextProviderProps> = ({
  children,
  nextRoute,
  steps,
  validator,
}) => {
  const [stepIndex, setStepIndex] = useState(0);
  const navigate = useNavigate();

  function validateAnswer<T = string>(value: T) {
    const isValid = validator(value);

    if (isValid) {
      navigate(nextRoute, {
        state: {
          fromHome: nextRoute.includes("playground"),
          fromPlayground: nextRoute.includes("finish"),
        },
      });
    } else {
      setStepIndex((prev) => (prev === steps.length - 1 ? prev : prev + 1));
    }
  }

  const curentStep = steps[stepIndex];

  return (
    <QuestContext.Provider value={{ validateAnswer, curentStep, stepIndex }}>
      {children}
    </QuestContext.Provider>
  );
};
