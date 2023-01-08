import { Heading, Box, Text, Button, Image, Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextLink from "next/link";

import BadgeLogo from "lib/components/BadgeLogo";
import Heading200 from "lib/components/Typography/Heading200";

const Home = () => {
  return (
    <Box>
      <NextSeo title="Hey Denver!" />
      <Flex
        backgroundImage={{
          base: "url(MobileHeaderIllustration.png)",
          md: "url(HeaderIllustration.png)",
        }}
        backgroundSize={{ base: "contain", md: "cover" }}
        backgroundRepeat="no-repeat"
        color="wine.500"
        minHeight={{ base: "380px", md: "760px" }}
        justifyContent="center"
        alignItems="center"
        paddingX={{ base: "4", md: "0" }}
        position="relative"
        overflow="visible"
      >
        <Box
          maxWidth="1000px"
          margin="0 auto"
          textAlign="center"
          paddingX={["4", "0"]}
        >
          <Heading
            fontSize={{ base: "48px", md: "124px" }}
            fontWeight={100}
            lineHeight={{ base: "58px", md: "124px" }}
            textShadow={{
              base: "0px 4px 0px #F0A107",
              md: "0px 8px 0px #F0A107",
            }}
          >
            Hey, Denver Tech Folk.
          </Heading>
          <Text
            fontSize={{ base: "22px", md: "32px" }}
            maxWidth="490px"
            margin="0 auto"
            lineHeight={{ base: "28px", md: "38px" }}
            paddingTop="4"
          >
            Let’s take a different approach to networking.{" "}
            <strong className="circle-sketch-highlight">
              Let’s make friends.
            </strong>
          </Text>
        </Box>
      </Flex>
      <Box
        marginY="16"
        marginTop="-18"
        textAlign="center"
        paddingX={{ base: "4", md: "0" }}
      >
        <Text
          align="center"
          fontSize="22px"
          lineHeight="32px"
          maxWidth="66ch"
          margin="0 auto"
        >
          There are tons of great professional networking opportunities for us
          in Denver, so we wanted to focus on helping tech industry folks
          get&nbsp;<strong>together in a more personal way</strong>. We want to
          bring together designers, developers, product managers, students,
          teachers, leaders — and more! — in ways&nbsp;
          <strong>beyond what you do for a nine-to-five</strong>.
        </Text>
        <Button
          marginTop="4"
          size="lg"
          as={NextLink}
          href="/membership-application"
          backgroundColor="royalBlue.500"
          textColor="white"
          _hover={{ bg: "#173BC6" }}
        >
          Join the club
        </Button>
      </Box>
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        paddingX={{ base: "4", md: "0" }}
      >
        <Box>
          <Heading200>Get together, online or in-person.</Heading200>

          <Text maxWidth="520px" fontSize="22px" lineHeight="32px">
            Buddy up for a meetup, plan a hike, or start a remote worker happy
            hour. If it brings folks together, we’ll support it.
          </Text>
        </Box>
        <Box>
          <Image
            src="Hiking.png"
            alt="An illustrated image of a group of people hiking."
          />
        </Box>
      </Flex>
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        alignItems="center"
        direction={{ base: "column-reverse", md: "row" }}
        paddingX={{ base: "4", md: "0" }}
      >
        <Box>
          <Image
            src="Bookclub.png"
            alt="An illustrated image of a group of hands over books, portraying a bookclub."
          />
        </Box>
        <Box>
          <Heading200>
            Connect over your{" "}
            <span className="circle-sketch-highlight">passions</span>.
          </Heading200>
          <Text maxWidth="520px" fontSize="22px" lineHeight="32px">
            Reading, crafting, video games, you name it. What are you into
            outside of work? Chat about it with the community!
          </Text>
        </Box>
      </Flex>
      <Box
        textAlign="center"
        marginTop={{ base: "4", md: "24" }}
        paddingX={{ base: "4", md: "0" }}
      >
        <Heading
          fontSize={{ base: "48px", md: "100px" }}
          marginBottom={{ base: "8", md: "16" }}
          fontWeight="100"
          textShadow={{
            base: "0px 4px 0px #F0A107",
            md: "0px 6px 0px #F0A107",
          }}
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
        <Text
          fontSize="22px"
          lineHeight="32px"
          marginY={{ base: "6", md: "8" }}
        >
          We’d love to have you in the club. So what do you say?
        </Text>
        <Button
          size="lg"
          as={NextLink}
          href="/membership-application"
          backgroundColor="royalBlue.500"
          textColor="white"
          _hover={{ bg: "#173BC6" }}
        >
          Join the club
        </Button>
      </Box>
      <Flex
        justifyContent="center"
        alignItems="center"
        paddingY="0"
        marginTop={{ base: "12", md: "24" }}
      >
        <BadgeLogo fg="white" bg="#8c3b34" />
      </Flex>
    </Box>
  );
};

export default Home;
