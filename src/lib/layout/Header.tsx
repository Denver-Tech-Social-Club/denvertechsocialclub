import { Box, Flex } from "@chakra-ui/react";

import Logo from "lib/components/Logo";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Box as="header" width="full">
      <Flex maxWidth="1440px" margin="0 auto" paddingY="2">
        <Flex alignItems="center">
          <Logo fg="white" bg="black" />
        </Flex>
        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
