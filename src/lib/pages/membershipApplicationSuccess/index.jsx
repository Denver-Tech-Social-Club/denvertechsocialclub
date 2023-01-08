import { Box, Heading, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const MembershipApplicationSuccess = () => {
  return (
    <Box minHeight="100vh" paddingY="20">
      <NextSeo title="Hooray! Application Success" />
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
          ooa!
        </Heading>
        <Text fontSize="22px" lineHeight="32px">
          Your application has been sent in for review. We&apos;ll take a look
          and reach out if we have any questions or you&apos;ll be getting an
          email in your inbox with the invite!
        </Text>
        <Text marginTop="4">
          Any email will come from{" "}
          <a href="mailto:hi@denvertechsocial.club">hi@denvertechsocial.club</a>
          , so be sure to add that to your contacts. If you haven&apos;t heard
          from us after a few days make sure to check your spam folder, or feel
          free to email us!
        </Text>
      </Box>
    </Box>
  );
};

export default MembershipApplicationSuccess;
