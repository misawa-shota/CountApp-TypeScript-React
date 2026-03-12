import { VStack, Button } from "@chakra-ui/react";

export default function OpenDeliveryApps() {

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

  );
}