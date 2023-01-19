export interface ProductCharacteristic {
  value: string
  name: string
}

export interface ReviewModel {
  _id: string
  name: string
  title: string
  rating: number
  createdAt: Date
  description: string
}

export interface ProductModel {
  _id: string
  __v: number
  link: string
  price: number
  title: string
  image: string
  tags: string[]
  reviews: any[]
  credit: number
  updateAt: Date
  createdAt: Date
  oldPrice: number
  reviewAvg?: number
  advantages: string
  description: string
  reviewCount: number
  categories: string[]
  initialRating: number
  characterisrics: ProductCharacteristic[]
  disadvantages: string
}
