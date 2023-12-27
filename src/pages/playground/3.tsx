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
  steps: [null, "step one"],
  answer: "three",
  task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,excepturi accusantium veritatis doloremque aliquam id maiores reprehenderit, voluptatum illum ex natus velit enim dolore, blanditiis voluptate inventore porro expedita? Aut!",
  validator: function <T = string>(value: T): boolean {
    return value === this.answer;
  },
  secretString: "- -.--  -. . .--- -- --- .-- .. .-. -. .-", //ТИ НЕЙМОВІРНА //https://kuryliak.tk/js/calc/morze.php
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

const PlaygroundFourContent = () => {
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
        <div>{curentStep}</div>
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
          Note! 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          excep velit enim dolore, blanditiis voluptate inventore porro
          expedita? Aut!
        </Box>
        <PlaygroundFourContent />
      </Quest>
    </Container>
  );
};

export default PlaygroundThree;
