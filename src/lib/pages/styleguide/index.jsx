import { Box, Flex, List, ListItem, Text } from "@chakra-ui/react";

const StyleGuide = () => {
  const colors = [
    {
      color: "Wine",
      hex: "#8c3b34",
    },
    {
      color: "Soft Peach",
      hex: "#fed5c7",
    },
    {
      color: "Coral",
      hex: "#ff7853",
    },
    {
      color: "Mustard",
      hex: "#ffd554",
    },
    {
      color: "Cream",
      hex: "#ffeaaa",
    },
    {
      color: "CO Green",
      hex: "#007705",
    },
    {
      color: "Royal Blue",
      hex: "#3559e3",
    },
    {
      color: "Beach",
      hex: "#9debff",
    },
    {
      color: "Midnight Blue",
      hex: "#26325e",
    },
  ];

  return (
    <Box padding="10" background="white" minH="100vh">
      <h2>Brand Style</h2>
      <h3>Font: Radnick</h3>
      <List>
        {colors.map(({ color, hex }) => (
          <ListItem key={color} mb="4">
            <Flex alignItems="center">
              <Box
                style={{ backgroundColor: hex }}
                height="10"
                width="10"
                mr="2"
              />
              <Text width="120px">{color}</Text>{" "}
              <Text className="from-neutral- ml-2">{hex}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StyleGuide;
