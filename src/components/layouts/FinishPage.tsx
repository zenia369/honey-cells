import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface FinishPageProps {
  children: ReactNode;
}

const FinishPage: FC<FinishPageProps> = ({ children }) => {
  return (
    <>
      {children}
      <Box as="p" color="white" textAlign="center">
        ©️ Created by Argonavt with 💖
      </Box>
    </>
  );
};

export default FinishPage;
