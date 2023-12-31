import { Box, BoxProps, Tooltip } from "@chakra-ui/react";
import { PlaybackOptions } from "@dotlottie/player-component";
import { CSSProperties, FC } from "react";
import { motion } from "framer-motion";

interface SnowmanProps {
  lottiePlayer?: { style: CSSProperties } & PlaybackOptions;
  boxProps?: BoxProps;
}

const Snowman: FC<SnowmanProps> = ({ boxProps, lottiePlayer }) => {
  return (
    <Box
      {...boxProps}
      as={motion.div}
      initial={{
        opacity: 0,
        x: 400,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <Tooltip label="Я сніговик, привіт">
        <dotlottie-player
          autoplay
          loop
          mode="normal"
          src="/honey-cells/Animation - 1703692766211.lottie"
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
