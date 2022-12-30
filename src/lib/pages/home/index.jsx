import {
  Heading,
  Box,
  Text,
  Button,
  Image,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import BadgeLogo from "lib/components/BadgeLogo";
import Heading200 from "lib/components/Typography/Heading200";

const Home = () => {
  const mastheadBg = useColorModeValue("royalBlue.500", "royalBlue.500");

  return (
    <Box>
      <NextSeo title="Home" />
      <Flex
        backgroundColor={mastheadBg}
        color="white"
        minHeight={["400px", "700px"]}
        justifyContent="center"
        alignItems="center"
        paddingX={["4", "0"]}
      >
        <Box
          maxWidth="1000px"
          margin="0 auto"
          textAlign="center"
          paddingX={["4", "0"]}
        >
          <Heading
            fontSize={{ base: "64px", md: "124px" }}
            fontWeight={100}
            lineHeight={{ base: "72px", md: "124px" }}
          >
            Hey, Denver Tech Folk.
          </Heading>
          <Text
            fontSize="28px"
            maxWidth="490px"
            margin="0 auto"
            lineHeight="38px"
          >
            Let’s take a different approach to networking.{" "}
            <strong>Let’s make friends.</strong>
          </Text>
        </Box>
      </Flex>
      <Box marginY="16" textAlign="center" paddingX={["4", "0"]}>
        <Text
          align="center"
          fontSize="22px"
          lineHeight="32px"
          maxWidth="66ch"
          margin="0 auto"
        >
          There are tons of great professional networking opportunities for us
          in Denver, so we wanted to focus on helping tech industry folks
          gel&nbsp;<strong>together in a more personal way</strong>. We want to
          bring together designers, developers, product managers, students,
          teachers, leaders — and more! — in ways&nbsp;
          <strong>beyond what you do for a nine-to-five</strong>.
        </Text>
        <Button
          marginTop="4"
          size="lg"
          as={NextLink}
          href="/membership-application"
          colorScheme="messenger"
        >
          Join the club
        </Button>
      </Box>
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        alignItems="center"
        direction={["column", "row"]}
        paddingX={["4", "0"]}
      >
        <Box>
          <Heading200>Get together, online or in-person.</Heading200>

          <Text maxWidth="520px" fontSize="22px" lineHeight="32px">
            Buddy up for a meetup, plan a hike, or start a remote worker happy
            hour. If it brings folks together, we’ll support it.
          </Text>
        </Box>
        <Box>
          <Image src="IMAGE.png" />
        </Box>
      </Flex>
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        alignItems="center"
        direction={["column-reverse", "row"]}
        paddingX={["4", "0"]}
      >
        <Box>
          <Image src="IMAGE2.png" />
        </Box>
        <Box>
          <Heading200>Connect over your passions.</Heading200>
          <Text maxWidth="520px" fontSize="22px" lineHeight="32px">
            Reading, crafting, video games, you name it. What are you into
            outside of work? Chat about it with the community!
          </Text>
        </Box>
      </Flex>
      <Box textAlign="center" marginY="24" paddingX={["4", "0"]}>
        <Heading
          fontSize={["52px", "100px"]}
          marginBottom={["8", "16"]}
          fontWeight="100"
        >
          e’re just <br />
          getın started.
        </Heading>
        <Text maxWidth="60ch" fontSize="22px" lineHeight="32px" margin="0 auto">
          You found us at the beginning of our journey, and we have lots
          planned! For now, joining the club gets you access to our sparkly new
          Discord server. We’ve set the server up with some neat channels and
          features to help us build connections. We’re also working on a
          members-only directory, events — like a meetup clone light, just for
          us! — and more.
        </Text>
        <Text fontSize="22px" lineHeight="32px" marginY={["6", "8"]}>
          We’d love to have you in the club. So what do you say?
        </Text>
        <Button
          size="lg"
          as={NextLink}
          href="/membership-application"
          colorScheme="messenger"
        >
          Join the club
        </Button>
      </Box>
      <Flex justifyContent="center" alignItems="center" paddingY="0">
        <BadgeLogo fg="#8c3b34" bg="#ffd554" />
      </Flex>
    </Box>
  );
};

export default Home;
