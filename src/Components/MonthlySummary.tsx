import {
  Box,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { getOrders } from "../utils/Storage.js";

import {
  getAppCounts
} from "../utils/Calculations.js";

export default function MonthlySummary() {

  const orders = getOrders();

  const appCounts =
    getAppCounts(orders);

  return (

    <Box
      bg="white"
      p={6}
      borderRadius="xl"
    >

      <VStack gap={4}>

        <Text
          fontSize="sm"
        >
          アプリ別
        </Text>

        <HStack
          w="100%"
          justify="space-between"
        >
          <Text>Uber Eats</Text>
          <Text>
            {appCounts.ubereats}
          </Text>
        </HStack>

        <HStack
          w="100%"
          justify="space-between"
        >
          <Text>出前館</Text>
          <Text>
            {appCounts.demaecan}
          </Text>
        </HStack>

        <HStack
          w="100%"
          justify="space-between"
        >
          <Text>Rocket Now</Text>
          <Text>
            {appCounts.rocketnow}
          </Text>
        </HStack>

      </VStack>

    </Box>
  );
}