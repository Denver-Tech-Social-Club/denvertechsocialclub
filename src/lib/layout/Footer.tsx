import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" marginTop="16">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{" "}
        <Link
          href="https://denvertechsocial.club"
          isExternal
          rel="noopener noreferrer"
        >
          denvertechsocial.club
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
