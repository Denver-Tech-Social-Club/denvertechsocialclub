import { Box, Flex, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import Logo from "lib/components/Logo";

const Header = () => {
  return (
    <Box as="header" width="full" position="fixed">
      <Flex maxWidth="1280px" margin="0 auto" paddingY="4">
        <Flex alignItems="center">
          <Link as={NextLink} href="/">
            <Logo fg="white" bg="black" />
          </Link>
        </Flex>
        <Box marginLeft="auto">
          <Button
            as={NextLink}
            href="/membership-application"
            colorScheme="gray"
          >
            Become a member
          </Button>
          {/* <ThemeToggle /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
