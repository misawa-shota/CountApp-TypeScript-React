import { VStack, Button, Box } from "@chakra-ui/react";

export default function OpenDeliverApp() {

  const openUber = () => {
    window.location.href = "ubereats://"
  };

  const openDemae = () => {
    window.location.href = "demaecan://"
  };

  const openRocket = () => {
    window.location.href = "rocketnow://"
  };

  return (
    <Box
      bg="white"
      p={6}
      borderRadius="xl"
    >
      <VStack gap={3}>

        <Button
          colorScheme="blackAlpha"
          onClick={openUber}
        >
          Uber Eats を開く
        </Button>

        <Button
          colorScheme="blackAlpha"
          onClick={openDemae}
        >
          出前館を開く
        </Button>

        <Button
          colorScheme="blackAlpha"
          onClick={openRocket}
        >
          Rocket Now を開く
        </Button>

      </VStack>
    </Box>
  );
}