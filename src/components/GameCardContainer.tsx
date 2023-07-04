import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .10s ease-in",
      }}
      borderRadius={12}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
