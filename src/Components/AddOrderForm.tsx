import {
  Box,
  Button,
  Input,
  Select as SelectComponent,
  VStack,
  Text,
  createListCollection
} from "@chakra-ui/react";

import { useState } from "react";

import { saveOrder }
from "../utils/Storage.js";
import type { DeliveryApp } from "../types/Order.js";

export default function AddOrderForm() {

  const [amount, setAmount] =
    useState(0);

  const [app, setApp] =
    useState<DeliveryApp>("ubereats");

  const appCollection = createListCollection({
    items: [
      { label: "Uber Eats", value: "ubereats" },
      { label: "出前館", value: "demaecan" },
      { label: "Rocket Now", value: "rocketnow" }
    ]
  });

  function submit() {

    saveOrder({
      id: crypto.randomUUID(),
      app,
      amount,
      date: new Date().toISOString()
    })

    alert("注文を登録しました");
  }

  return (

    <Box
      bg="white"
      p={6}
      borderRadius="xl"
    >

      <VStack gap={4}>

        <Text fontSize="lg">
          注文金額登録
        </Text>

        <SelectComponent.Root collection={appCollection} value={[app]} onValueChange={(e) => setApp(e.value[0] as DeliveryApp)}>
          <SelectComponent.Trigger>
            {app}
          </SelectComponent.Trigger>
          <SelectComponent.Content>
            {appCollection.items.map((item) => (
              <SelectComponent.Item key={item.value} item={item}>
                {item.label}
              </SelectComponent.Item>
            ))}
          </SelectComponent.Content>
        </SelectComponent.Root>

        <Input
          type="number"
          placeholder="注文金額"
          onChange={(e) =>
            setAmount(
              Number(e.target.value)
            )
          }
        />

        <Button
          colorScheme="red"
          w="100%"
          onClick={submit}
        >
          登録
        </Button>

      </VStack>

    </Box>
  )
}