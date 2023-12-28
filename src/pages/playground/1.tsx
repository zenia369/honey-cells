import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  Stack,
} from "@chakra-ui/react";
import Quest from "../../components/Quest";
import { ChangeEventHandler, useState } from "react";
import { useQuestContext } from "../../context/Quest.context";

const QuestConfig = {
  nextRoute: "/playground/1/2",
  steps: [null, "step one"],
  answer: "two",
  task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,excepturi accusantium veritatis doloremque aliquam id maiores reprehenderit, voluptatum illum ex natus velit enim dolore, blanditiis voluptate inventore porro expedita? Aut!",
  validator: function <T = string>(value: T): boolean {
    return value === this.answer;
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
          Note! Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          excep velit enim dolore, blanditiis voluptate inventore porro
          expedita? Aut!
        </Box>
        <PlaygroundOneContent />
      </Quest>
    </Container>
  );
};

export default PlaygroundOne;
