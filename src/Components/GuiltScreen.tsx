import {
  Box,
  Text,
  VStack
} from "@chakra-ui/react";

import { getOrders } from "../utils/Storage.js";
import { getMonthlyTotal, getMonthlyCount } from "../utils/Calculations.js";

export default function GuiltScreen() {

  const orders = getOrders();

  const monthlyTotal =
    getMonthlyTotal(orders);

    const count =
        getMonthlyCount(orders);

  const yearly = monthlyTotal * 12;
  const fiveYears = yearly * 5;

  return (

    <Box
      bg="gray.900"
      color="white"
      p={8}
      borderRadius="xl"
      textAlign="center"
    >

      <VStack gap={4}>

        <Text fontSize="lg">
          今月の出前支出
        </Text>

        <Text
          fontSize="5xl"
          fontWeight="bold"
          color="red.400"
        >
          ¥{monthlyTotal.toLocaleString()}
        </Text>

        <Text color="yellow.300">
          今月 {count} 回
        </Text>

        <Text color="gray.400">
          年間
          ¥{yearly.toLocaleString()}
        </Text>

        <Text color="orange.300">
          5年で
          ¥{fiveYears.toLocaleString()}
        </Text>

        <Text color="yellow.400">
          本当に注文しますか？
        </Text>

      </VStack>

    </Box>
  )
}