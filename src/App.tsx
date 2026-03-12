import {
  Box,
  Container,
  VStack
} from "@chakra-ui/react";

import GuiltScreen from "./Components/GuiltScreen.js";
import MonthlySummary from "./Components/MonthlySummary.js";
import AddOrderForm from "./Components/AddOrderForm.js";
import OpenDeliverApp from "./Components/OpenDeliverApp.js";

export default function App() {

  return (

    <Box
      bg="gray.900"
      minH="100vh"
      p={6}
    >

      <Container maxW="md">

        <VStack gap={6}>

          <GuiltScreen />

          <MonthlySummary />

          <OpenDeliverApp />

          <AddOrderForm />

        </VStack>

      </Container>

    </Box>
  );
}