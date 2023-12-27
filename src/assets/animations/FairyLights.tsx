import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface FairyLightsProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const FairyLights: FC<FairyLightsProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <Tooltip label="Дзінь-дзінь-дзінь">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/Animation - 1703690297209.lottie"
          style={{
            width: "300px",
          }}
          {...lottiePlayer}
        />
      </Tooltip>
    </Box>
  );
};

export default FairyLights;
