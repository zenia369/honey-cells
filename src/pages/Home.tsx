import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import TrickyButton from "../components/TrickyButton";

const App = () => {
  return (
    <Container>
      <Flex
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" color="white">
          Вітаю на цьому сайті
        </Heading>
        <Text as="p" color="white">
          для того щоб продовжити потрібно натиснути на цю кнопку
        </Text>
        <TrickyButton />
      </Flex>
    </Container>
  );
};

export default App;
