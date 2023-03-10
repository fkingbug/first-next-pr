import React from 'react'
import axios from 'axios'

import { withLayout } from '@/layout/Layout'
import { MenuItem } from '@/interfaces/menu.interface'
import { TopPageComponent } from '@/page-components'

import type { ParsedUrlQuery } from 'querystring'
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import type { TopPageModel } from '@/interfaces/toppage.interface'
import type { ProductModel } from '@/interfaces/product.interface'

const firstCategory = 0

function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
  return <TopPageComponent firstCategory={firstCategory} page={page} products={products} />
}

export default withLayout(TopPage)

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  )
  return {
    //Из массива массивов достаем урлы каждого объекта
    paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
    fallback: true,
  }
}

//Запрос на сервер чтобы пришла нода уже с данными в браузер
export const getStaticProps: GetStaticProps<TopPageProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    //нету params верни 404
    return {
      notFound: true,
    }
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  )
  const { data: page } = await axios.get<TopPageModel>(
    //alias - так название файла
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
  )
  const { data: products } = await axios.post<ProductModel[]>(
    //alias - так название файла
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
    {
      category: page.category,
      limit: 10,
    }
  )
  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  }
}

interface TopPageProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
  page: TopPageModel
  products: ProductModel[]
}
