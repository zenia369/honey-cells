import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ChangeEventHandler, useEffect, useState } from "react";
import Quest from "../../components/Quest";
import { useQuestContext } from "../../context/Quest.context";

const QuestConfig = {
  nextRoute: "/finish/1",
  steps: [
    "як не поганий ресур рекомендую глянути на: https://kuryliak.tk/js/calc/morze.php",
    import.meta.env.VITE_STEP_THREE_1,
    import.meta.env.VITE_STEP_THREE_2,
    import.meta.env.VITE_STEP_THREE_3,
  ],
  answer: import.meta.env.VITE_ANSWER_THREE,
  task: import.meta.env.VITE_QUESTION_THREE,
  validator: function <T = string>(value: T): boolean {
    return (
      (value as string)
        .replaceAll(" ", "")
        .split("")
        .map((st) => st.toLowerCase())
        .join("") ===
      (this.answer as string)
        .replaceAll(" ", "")
        .split("")
        .map((st) => st.toLowerCase())
        .join("")
    );
  },
  secretString: import.meta.env.VITE_SECRET_STRING as string,
};

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleStartPlaying = () => {
    setIsPlaying(true);
    const audioContext = new AudioContext();
    const oscillator = audioContext.createOscillator();

    const ctx = audioContext;
    const dot = 1.2 / 15;
    let t = ctx.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, t);

    QuestConfig.secretString.split("").forEach((letter) => {
      switch (letter) {
        case ".":
          gainNode.gain.setValueAtTime(1, t);
          t += dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case "-":
          gainNode.gain.setValueAtTime(1, t);
          t += 5 * dot;
          gainNode.gain.setValueAtTime(0, t);
          t += dot;
          break;
        case " ":
          t += 8 * dot;
          break;
      }
    });

    setTimer(t);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(t);

    const handleEndPlaying = () => {
      setIsPlaying(false);
      oscillator.removeEventListener("ended", handleEndPlaying);
    };

    oscillator.addEventListener("ended", handleEndPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      console.log("__start__");

      const timers = QuestConfig.secretString.split("").map((st, idx) => {
        return setTimeout(() => {
          console.log(idx, st);
        }, idx * (timer / QuestConfig.secretString.length) * 1000);
      });

      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [isPlaying, timer]);

  return (
    <Box>
      <Button
        colorScheme="blue"
        onClick={handleStartPlaying}
        isDisabled={isPlaying}
      >
        Грати музику
      </Button>
    </Box>
  );
};

const PlaygroundThreeContent = () => {
  const { validateAnswer, curentStep } = useQuestContext();
  const [value, setValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    validateAnswer(value);
  };

  return (
    <>
      <Divider />
      <Stack spacing={2} mt={4}>
        <Player />
        <Box>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="Вводь значення туть"
            size="lg"
            color="white"
          />
        </Box>
        <Button colorScheme="green" onClick={handleClick}>
          Перевірити!
        </Button>
        <Box color="white">{curentStep}</Box>
      </Stack>
    </>
  );
};

const PlaygroundThree = () => {
  return (
    <Container>
      <Quest
        nextRoute={QuestConfig.nextRoute}
        task={QuestConfig.task}
        validator={QuestConfig.validator.bind(QuestConfig)}
        steps={QuestConfig.steps}
      >
        <Box as="p" mb={4} color="white">
          {import.meta.env.VITE_NOTE_THREE}
        </Box>
        <PlaygroundThreeContent />
      </Quest>
    </Container>
  );
};

export default PlaygroundThree;
