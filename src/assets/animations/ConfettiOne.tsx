import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ConfettiOneProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ConfettiOne: FC<ConfettiOneProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/Animation - 1703705756033 - Confetti 1.lottie"
        style={{
          width: "300px",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ConfettiOne;
