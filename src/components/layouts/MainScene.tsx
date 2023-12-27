import { FC, ReactNode } from "react";
import { Box, Tooltip } from "@chakra-ui/react";
import ChristmasBall from "../../assets/animations/ChristmasBall";
import FairyLights from "../../assets/animations/FairyLights";

interface MainSceneProps {
  children: ReactNode;
}

const MainScene: FC<MainSceneProps> = ({ children }) => {
  return (
    <Box position="relative">
      {children}
      <ChristmasBall
        boxProps={{ position: "absolute", top: 0, left: 0 }}
        lottiePlayer={{
          style: {
            width: 300,
          },
        }}
      />
      <Tooltip>
        <FairyLights boxProps={{ position: "absolute", top: 0, right: 0 }} />
      </Tooltip>
    </Box>
  );
};

export default MainScene;
