import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ConfettiTwoProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ConfettiTwo: FC<ConfettiTwoProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/Animation - 1703705756033 - Confetti 2.lottie"
        style={{
          width: "300px",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ConfettiTwo;
