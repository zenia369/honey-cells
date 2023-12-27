import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { FC, CSSProperties } from "react";

interface ChristmasBallProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const ChristmasBall: FC<ChristmasBallProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box {...boxProps}>
      <Tooltip label="Кручусь верчусь, дивись на мене">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/Animation - 1703688503766.lottie"
          style={{
            width: "300px",
          }}
          {...lottiePlayer}
        />
      </Tooltip>
    </Box>
  );
};

export default ChristmasBall;
