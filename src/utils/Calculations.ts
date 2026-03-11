import type { Order } from "../types/Order.js";

export function getMonthlyOrders(
  orders: Order[]
) {

  const now = new Date();

  return orders.filter(o => {

    const d = new Date(o.date);

    return (
      d.getFullYear() === now.getFullYear() &&
      d.getMonth() === now.getMonth()
    );
  });
};

export function getMonthlyTotal(
  orders: Order[]
) {

  return getMonthlyOrders(orders)
    .reduce((sum, o) => sum + o.amount, 0);
};

export function getMonthlyCount(
  orders: Order[]
) {

  return getMonthlyOrders(orders).length;
};

export function getAppCounts(
  orders: Order[]
) {

  const monthly = getMonthlyOrders(orders);

  const counts = {
    ubereats: 0,
    demaecan: 0,
    rocketnow: 0
  };

  monthly.forEach(order => {
    counts[order.app]++
  });

  return counts;
};