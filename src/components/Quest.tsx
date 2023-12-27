import { Box, Text, Heading } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import {
  QuestContextProvider,
  QuestContextProviderProps,
} from "../context/Quest.context";

interface QuestProps extends QuestContextProviderProps {
  task: string;
  children: ReactNode;
}

const Quest: FC<QuestProps> = ({ children, task, ...props }) => {
  return (
    <QuestContextProvider {...props}>
      <Box py={10}>
        <Box padding={2} mb={4} borderRadius={4} color="black" bg="gray.200">
          <Heading as="h5">Завдання:</Heading>
          <Text as="p">{task}</Text>
        </Box>
        {children}
      </Box>
    </QuestContextProvider>
  );
};

export default Quest;
