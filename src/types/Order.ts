export type DeliveryApp =
  | "ubereats"
  | "demaecan"
  | "rocketnow"

export type Order = {
  id: string
  app: DeliveryApp
  amount: number
  date: string
}