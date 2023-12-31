import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useId } from "react";

const colors = ["red", "orange", "yellow", "green", "blue", "purple", "cyan"];
const getRandColor = () => {
  return (
    (colors[Math.floor(Math.random() * colors.length - 1)] ??
      colors[colors.length - 1]) + ".400"
  );
};

const TITLE = "Вітаю з новим роком 2024!!";
const finishTitleConf = {
  list: {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  },
  item: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  },
};

const FinishTitleItem = ({ st }: { st: string }) => {
  const color = useColorModeValue(getRandColor(), getRandColor());

  return (
    <Box
      as={motion.li}
      visibility={st === " " ? "hidden" : "visible"}
      variants={finishTitleConf.item}
      color={color}
    >
      {st === " " ? <Box width={2} height={2} /> : st}
    </Box>
  );
};

const FinishTitle = () => {
  const finishTitleId = useId();
  return (
    <Heading as={motion.h4} textAlign="center">
      <Box
        as={motion.ul}
        display="flex"
        listStyleType="none"
        initial="hidden"
        animate="visible"
        variants={finishTitleConf.list}
      >
        {TITLE.split("").map((st, idx) => (
          <FinishTitleItem key={`${finishTitleId}-${st}-${idx}`} st={st} />
        ))}
      </Box>
    </Heading>
  );
};

export default FinishTitle;
