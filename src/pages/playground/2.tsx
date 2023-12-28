import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Stack,
} from "@chakra-ui/react";
import Quest from "../../components/Quest";
import { useQuestContext } from "../../context/Quest.context";
import { ChangeEventHandler, useState } from "react";

const QuestConfig = {
  nextRoute: "/playground/1/3",
  steps: [
    null,
    import.meta.env.VITE_STEP_TWO_1,
    import.meta.env.VITE_STEP_TWO_2,
    import.meta.env.VITE_STEP_TWO_3,
    import.meta.env.VITE_STEP_TWO_4,
  ],
  answer: import.meta.env.VITE_ANSWER_TWO,
  task: import.meta.env.VITE_QUESTION_TWO,
  validator: function <T = string>(value: T): boolean {
    const answer = (this.answer as string)
      .split(",")
      .map((st) => st.trim().toLowerCase());
    const answers = (value as string)
      .split(",")
      .map((st) => st.trim().toLowerCase());

    if (answers.length < 3) return false;

    return answers.every((st) => answer.includes(st));
  },
};

const PlaygroundTwoContent = () => {
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

const PlaygroundTwo = () => {
  return (
    <Container color="white">
      <Quest
        nextRoute={QuestConfig.nextRoute}
        task={QuestConfig.task}
        validator={QuestConfig.validator.bind(QuestConfig)}
        steps={QuestConfig.steps}
      >
        <Box as="p" mb={4} color="white">
          {import.meta.env.VITE_NOTE_TWO}
        </Box>
        <PlaygroundTwoContent />
      </Quest>
    </Container>
  );
};

export default PlaygroundTwo;
