import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "lib/components/Logo";

const Header = () => {
  return (
    <Box as="header" width="full" position="fixed" zIndex="sticky">
      <Flex
        maxWidth="1280px"
        margin="0 auto"
        paddingY="4"
        paddingX={["4", "0"]}
      >
        <Flex alignItems="center">
          <Link as={NextLink} href="/">
            <Logo fg="white" bg="black" />
          </Link>
        </Flex>
        <Box marginLeft="auto">{/* <ThemeToggle /> */}</Box>
      </Flex>
    </Box>
  );
};

export default Header;
