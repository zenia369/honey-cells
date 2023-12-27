import { Box, Container, Heading, Tooltip } from "@chakra-ui/react";
import MainScene from "../../components/layouts/MainScene";
import Snowman from "../../assets/animations/Snowman";
import ChristmasTree from "../../assets/animations/ChristmasTree";
import ChristmasGift from "../../assets/animations/ChristmasGift";
import ChristmasGifts from "../../assets/animations/ChristmasGifts";
import SnowmanScene from "../../assets/animations/SnowmanScene";

const FinishOne = () => {
  return (
    <MainScene>
      <Box height="100vh">
        <Container pt={8} color="white">
          <Heading as="h4" textAlign="center">
            Вітаю з новим роком 2024!!
          </Heading>
          <Box mt={4}>
            FinishOne
            <p>1</p>
          </Box>
        </Container>
        <Snowman
          boxProps={{ position: "absolute", top: "40%", left: 0 }}
          lottiePlayer={{ style: { width: 200 } }}
        />
        <ChristmasGift
          boxProps={{ position: "absolute", top: "40%", right: 0 }}
          lottiePlayer={{ style: { width: 200 } }}
        />
        <Tooltip label="Ще подаруночки...">
          <Box
            position="absolute"
            bottom={0}
            left={0}
            overflow="hidden"
            height={300}
            width={300}
          >
            <ChristmasTree
              boxProps={{ position: "absolute", bottom: -45, left: 0 }}
            />
            <ChristmasGifts
              boxProps={{
                position: "absolute",
                bottom: -55,
                left: 0,
                right: 0,
              }}
              lottiePlayer={{ style: { width: 200 } }}
            />
          </Box>
        </Tooltip>
        <SnowmanScene
          boxProps={{ position: "absolute", bottom: 0, right: 0 }}
          lottiePlayer={{ style: { width: 200 } }}
        />
      </Box>
    </MainScene>
  );
};

export default FinishOne;
