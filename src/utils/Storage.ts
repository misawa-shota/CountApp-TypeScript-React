import type { Order } from "../types/Order.js"

const KEY = "delivery_orders";

export function getOrders(): Order[] {
  const data = localStorage.getItem(KEY)
  if (!data) return []
  return JSON.parse(data)
}

export function saveOrder(order: Order) {

  const orders = getOrders();

  orders.push(order)

  localStorage.setItem(
    KEY,
    JSON.stringify(orders)
  )
}