import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const MembershipApplicationSuccess = () => {
  return (
    <Box minHeight="70vh">
      <NextSeo title="404 Not Found" />
      <Box maxWidth="1000px" marginX="auto" paddingTop="24" fontSize="x-large">
        Success! Your application has been sent in for review. We&apos;ll get
        back to you in a few days.
      </Box>
    </Box>
  );
};

export default MembershipApplicationSuccess;
