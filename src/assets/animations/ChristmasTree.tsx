import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ChristmasTreeProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ChristmasTree: FC<ChristmasTreeProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/honey-cells/3653778.lottie"
        style={{
          width: "300px",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ChristmasTree;
