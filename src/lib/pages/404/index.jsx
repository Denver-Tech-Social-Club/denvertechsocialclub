import { Box, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const Page404 = () => {
  return (
    <Box minHeight="100vh" paddingY="20">
      <NextSeo title="404" />
      <Box
        maxWidth="760px"
        marginX={{ base: "4", md: "auto" }}
        paddingY="12"
        paddingX={{ base: "4", md: "12" }}
        background="white"
        borderRadius="lg"
        textAlign="center"
      >
        <Heading size="3xl" marginBottom="12">
          404
        </Heading>
        <Text fontSize="22px" lineHeight="32px">
          The page you&apos;re heading to doesn&apos;t exist, sorry about that.
          If this keeps happening and you don&apos;t expect it to feel free to
          email us at{" "}
          <a href="mailto:hi@denvertechsocial.club">hi@denvertechsocial.club</a>
          .
        </Text>
      </Box>
    </Box>
  );
};

export default Page404;
