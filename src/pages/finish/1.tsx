import { Box, Container } from "@chakra-ui/react";
import MainScene from "../../components/layouts/MainScene";
import FinishOneScene from "../../components/layouts/FinishOneScene";
import FinishTitle from "../../components/FinishTitle";
import FinishPage from "../../components/layouts/FinishPage";

const FinishOne = () => {
  return (
    <MainScene>
      <FinishPage>
        <Container pt={8} color="white">
          <FinishOneScene>
            <FinishTitle />
            <Box
              py={4}
              as="p"
              dangerouslySetInnerHTML={{
                __html: import.meta.env.VITE_FINISH_ONE,
              }}
            />
          </FinishOneScene>
        </Container>
      </FinishPage>
    </MainScene>
  );
};

export default FinishOne;
