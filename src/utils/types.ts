export interface IProduct {
  id: number
  name: string
  price: number
  sku: string
  images?: {
    src?: string
  }[]
  description: string
  short_description: string
}