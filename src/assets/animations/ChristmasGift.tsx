import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface ChristmasGiftProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ChristmasGift: FC<ChristmasGiftProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <Tooltip label="Подарунок...">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/honey-cells/Animation - 1703692278695.lottie"
          style={{
            width: "300px",
          }}
          {...lottiePlayer}
        />
      </Tooltip>
    </Box>
  );
};

export default ChristmasGift;
