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
  Hr,
  Container,
} from "@react-email/components";

interface Props {
  name: string;
}

export default function HelloEmail({ name }: Props) {
  return (
    <Html>
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
        <Head>
          <title>Hello</title>
        </Head>

        <Body className="bg-white flex flex-col sm:w-screen">
          <Container>
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/852303f649c594f2/3469f6ae-6d5b-494a-b2b6-ead3dda47be7/600x200.png"
              alt="Denver Tech Social Club Header Image"
            ></Img>
            <Text>
              Hi there {name}! Thanks for showing interest in the Denver Tech
              Social Club. You should get your invite to the discord server
              shortly.
            </Text>
            <Hr></Hr>
            <div className="md:flex md:justify-center sm:block">
              <Button
                href="https://www.meetup.com/denver-tech-social-club/"
                className="bg-brand text-white p-2 rounded m-2"
              >
                DTSC Meetup
              </Button>
              <Button href="#" className="bg-brand text-white p-2 rounded m-2">
                DTSC Code of Conduct
              </Button>
              <Button href="#" className="bg-brand text-white p-2 rounded m-2">
                DTSC Rules
              </Button>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

HelloEmail.PreviewProps = {
  name: "Zach Green",
} as Props;
