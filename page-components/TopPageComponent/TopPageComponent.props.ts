import type { ProductModel } from '@/interfaces/product.interface'
import type { TopLevelCategory, TopPageModel } from '@/interfaces/toppage.interface'

export interface TopPageComponentsProps {
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}
