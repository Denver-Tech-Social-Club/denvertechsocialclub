import { Flex, Link, Text, Icon } from "@chakra-ui/react";
import { SiNetlify } from "react-icons/si";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" paddingY="4">
      <Text fontSize="sm" marginRight="2" color="wine.500">
        <Link href="https://www.netlify.com" target="_blank">
          <Icon as={SiNetlify} marginRight="1" />
          This site is powered by Netlify
        </Link>
      </Text>
      <Text fontSize="sm" color="wine.500">
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
