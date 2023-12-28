import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Stack,
} from "@chakra-ui/react";
import { ChangeEventHandler, useState } from "react";
import Quest from "../../components/Quest";
import { useQuestContext } from "../../context/Quest.context";

const QuestConfig = {
  nextRoute: "/playground/1/2",
  steps: [
    null,
    import.meta.env.VITE_STEP_ONE_1,
    import.meta.env.VITE_STEP_ONE_2,
    import.meta.env.VITE_STEP_ONE_3,
    import.meta.env.VITE_STEP_ONE_4,
  ],
  answer: import.meta.env.VITE_ANSWER_ONE,
  task: import.meta.env.VITE_QUESTION_ONE,
  validator: function <T = string>(value: T): boolean {
    return (
      (value as string).replaceAll('"', "").replaceAll(" ", "") ===
      this.answer.replaceAll('"', "").replaceAll(" ", "")
    );
  },
};

const PlaygroundOneContent = () => {
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
      <Stack spacing={2}>
        <Box mt={4}>
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

const PlaygroundOne = () => {
  return (
    <Container>
      <Quest
        nextRoute={QuestConfig.nextRoute}
        task={QuestConfig.task}
        validator={QuestConfig.validator.bind(QuestConfig)}
        steps={QuestConfig.steps}
      >
        <Box as="p" mb={4} color="white">
          {import.meta.env.VITE_NOTE_ONE}
        </Box>
        <PlaygroundOneContent />
      </Quest>
    </Container>
  );
};

export default PlaygroundOne;
