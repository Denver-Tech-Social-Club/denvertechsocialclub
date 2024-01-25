// import { Button } from "@react-email/button";
// import { Html } from "@react-email/html";
// import * as React from "react";
import {
  Html,
  Button,
  Head,
  Img,
  Text,
  Body,
  Tailwind,
} from "@react-email/components";

const bodyStyle = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
};

interface Props {
  name: string;
}

export default function HelloEmail({ name }: Props) {
  return (
    <Html>
      <Head>
        <title>Hello</title>
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#3559e3",
              },
            },
          },
        }}
      >
        <Body style={bodyStyle}>
          <Text>
            Hi there {name}! Thanks for showing interest in the Denver Tech
            Social Club. You should get your invite to the discord server
            shortly.
          </Text>
          <Button
            href="https://www.meetup.com/denver-tech-social-club/"
            className="bg-brand text-white p-2 rounded"
          >
            DTSC Meetup
          </Button>
        </Body>
      </Tailwind>
    </Html>
  );
}

HelloEmail.PreviewProps = {
  name: "Zach Green",
} as Props;
