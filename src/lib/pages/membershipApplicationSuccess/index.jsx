import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

const MembershipApplicationSuccess = () => {
  return (
    <Box minHeight="70vh">
      <NextSeo title="404 Not Found" />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "580px",
        }}
      >
        Success! Your application has been sent in for review. We&apos;ll get
        back to you in a few days.
      </Box>
    </Box>
  );
};

export default MembershipApplicationSuccess;
