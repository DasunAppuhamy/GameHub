import { Button, HStack, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Light" : "Dark"}
      </Button>
    </HStack>
  );
};

export default ColorModeSwitch;
