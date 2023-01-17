import React from 'react'
import axios from 'axios'

import { withLayout } from '@/layout/Layout'

import type { GetStaticProps, GetStaticPropsContext } from 'next'
import { MenuItem } from '@/interfaces/menu.interface'
import type { TopPageModel } from '@/interfaces/toppage.interface'
import { ParsedUrlQuery } from 'querystring'

function Course({ menu }: CourseProps): JSX.Element {
  return <></>
}

export default withLayout(Course)

//Запрос на сервер чтобы пришла нода уже с данными в браузер
export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  )
  const { data: page } = await axios.post<TopPageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias' + params,
    {
      firstCategory,
    }
  )
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
  page: TopPageModel
}

//10 : 00
