import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  wine: {
    500: "#8c3b34",
  },
  softPeach: {
    500: "#fed5c7",
  },
  coral: {
    500: "#ff7853",
  },
  mustard: {
    500: "#ffd554",
  },
  cream: {
    500: "#ffeaaa",
  },
  coGreen: {
    500: "#007705",
  },
  royalBlue: {
    500: "#3559e3",
  },
  beach: {
    500: "#9debff",
  },
  midnightBlue: {
    500: "#26325e",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
