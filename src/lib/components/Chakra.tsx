import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "lib/styles/theme";

import Fonts from "./Fonts";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};
