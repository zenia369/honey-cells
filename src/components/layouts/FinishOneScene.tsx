import { FC, ReactNode, useEffect, useState } from "react";
import { Box, Button, Tooltip } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import Snowman from "../../assets/animations/Snowman";
import ChristmasGift from "../../assets/animations/ChristmasGift";
import ChristmasTree from "../../assets/animations/ChristmasTree";
import ChristmasGifts from "../../assets/animations/ChristmasGifts";
import SnowmanScene from "../../assets/animations/SnowmanScene";
import ConfettiOne from "../../assets/animations/ConfettiOne";
import ConfettiTwo from "../../assets/animations/ConfettiTwo";
import ConfettiThree from "../../assets/animations/ConfettiThree";

interface FinishOneSceneProps {
  children: ReactNode;
}

const defaultConfettiSteps = ["confetti-one", "confetti-two", "confetti-three"];
let confettiSteps = [...defaultConfettiSteps];
type ConfettiStepTypes = "confetti-one" | "confetti-two" | "confetti-three";

const FinishOneScene: FC<FinishOneSceneProps> = ({ children }) => {
  const [confettiStep, setConfettiStep] = useState<
    ConfettiStepTypes | undefined
  >(() => confettiSteps.shift() as ConfettiStepTypes);

  useEffect(() => {
    if (confettiStep === undefined) return;

    const timer = setTimeout(() => {
      setConfettiStep(confettiSteps.shift() as ConfettiStepTypes | undefined);
    }, 10_000);

    return () => clearTimeout(timer);
  }, [confettiStep]);

  return (
    <>
      {children}
      <Snowman
        boxProps={{ position: "absolute", top: "40%", left: 0 }}
        lottiePlayer={{ style: { width: 200 } }}
      />
      <ChristmasGift
        boxProps={{ position: "absolute", top: "40%", right: 0 }}
        lottiePlayer={{ style: { width: 200 } }}
      />
      <Tooltip label="Ще подаруночки...">
        <Box
          position="absolute"
          bottom={0}
          left={0}
          overflow="hidden"
          height={300}
          width={300}
          as={motion.div}
          initial={{
            opacity: 0,
            x: 400,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          <ChristmasTree
            boxProps={{ position: "absolute", bottom: -45, left: 0 }}
          />
          <ChristmasGifts
            boxProps={{
              position: "absolute",
              bottom: -55,
              left: 0,
              right: 0,
            }}
            lottiePlayer={{ style: { width: 200 } }}
          />
        </Box>
      </Tooltip>
      <SnowmanScene
        boxProps={{ position: "absolute", bottom: 0, right: 0 }}
        lottiePlayer={{ style: { width: 200 } }}
      />
      {confettiStep === "confetti-one" ? <ConfettiOne /> : null}
      {confettiStep === "confetti-two" ? <ConfettiTwo /> : null}
      {confettiStep === "confetti-three" ? <ConfettiThree /> : null}
      {confettiStep === undefined ? (
        <Button
          leftIcon={<RepeatIcon />}
          colorScheme="teal"
          variant="outline"
          position="fixed"
          right="5%"
          top="50%"
          fontSize="small"
          onClick={() => {
            confettiSteps = [...defaultConfettiSteps];
            setConfettiStep(confettiSteps.shift() as ConfettiStepTypes);
          }}
        >
          Зіграти ще раз
        </Button>
      ) : null}
    </>
  );
};

export default FinishOneScene;
