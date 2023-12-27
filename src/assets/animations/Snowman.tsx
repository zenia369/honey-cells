import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";

interface SnowmanProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const Snowman: FC<SnowmanProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <Tooltip label="Я сніговик, привіт">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/Animation - 1703692766211.lottie"
          style={{
            width: "300px",
          }}
          {...lottiePlayer}
        />
      </Tooltip>
    </Box>
  );
};

export default Snowman;
