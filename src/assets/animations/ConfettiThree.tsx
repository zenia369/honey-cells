import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ConfettiThreeProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ConfettiThree: FC<ConfettiThreeProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/honey-cells/Animation - 1703705756033 - Confetti 3.lottie"
        style={{
          width: "300px",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ConfettiThree;
