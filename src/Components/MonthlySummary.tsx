import {
  Box,
  Text,
  VStack,
  HStack,
  Separator
} from "@chakra-ui/react";

import { getOrders } from "../utils/Storage.js";

import {
  getMonthlyTotal,
  getMonthlyCount,
  getAppCounts
} from "../utils/Calculations.js";

export default function MonthlySummary() {

  const orders = getOrders();

  const total =
    getMonthlyTotal(orders);

  const count =
    getMonthlyCount(orders);

  const appCounts =
    getAppCounts(orders);

  return (

    <Box
      bg="gray.900"
      p={6}
      borderRadius="xl"
    >

      <VStack gap={4}>

        <Text fontSize="lg">
          今月の出前
        </Text>

        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="red.300"
        >
          ¥{total.toLocaleString()}
        </Text>

        <Text color="yellow.300">
          今月 {count} 回
        </Text>

        <Separator />

        <Text
          fontSize="sm"
          color="gray.400"
        >
          アプリ別
        </Text>

        <HStack
          w="100%"
          justify="space-between"
          bg="whiteAlpha.200"
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