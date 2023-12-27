import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface SnowmanSceneProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const SnowmanScene: FC<SnowmanSceneProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <Tooltip label="Хо-хо-хо, колись...">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/Animation - 1703692967934.lottie"
          style={{
            width: "300px",
          }}
          {...lottiePlayer}
        />
      </Tooltip>
    </Box>
  );
};

export default SnowmanScene;
