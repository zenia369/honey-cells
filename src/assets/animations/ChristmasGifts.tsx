import { Box, BoxProps } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ChristmasGiftsProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ChristmasGifts: FC<ChristmasGiftsProps> = ({
  boxProps,
  lottiePlayer,
}) => {
  return (
    <Box {...boxProps}>
      <dotlottie-player
        autoplay
        loop
        mode="normal"
        src="/Animation - 1703692209069.lottie"
        style={{
          width: "300px",
        }}
        {...lottiePlayer}
      />
    </Box>
  );
};

export default ChristmasGifts;
