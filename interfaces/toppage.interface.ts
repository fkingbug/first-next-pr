export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageAdvantage {
  _id: string
  title: string
  desctiption: string
}

export interface HhData {
  _id: string
  count: number
  updateAt: Date
  juniorSalary: number
  seniorSalary: number
  mioddleSalary: number
}

export interface TopPageModel {
  hh: HhData
  _id: string
  __v: number
  tags: string[]
  alias: string
  title: string
  cratedAt: Date
  updatedAt: Date
  seoText: string
  category: string
  tagsTitle: string
  metaTitle: string
  secondCategory: string
  metaDescription: string
  advantages: TopPageAdvantage[]
  firstCategory: TopLevelCategory
}
