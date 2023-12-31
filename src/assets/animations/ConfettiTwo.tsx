import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ConfettiTwoProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ConfettiTwo: FC<ConfettiTwoProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps} position="fixed" top={0} bottom={0} left={0} right={0}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/honey-cells/Animation - 1703705677714 - Confetti 2.lottie"
        style={{
          width: "100%",
          height: "100%",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ConfettiTwo;
