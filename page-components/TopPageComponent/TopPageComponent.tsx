import React from 'react'
import cn from 'classnames'
import styles from './TopPageComponent.module.css'

import { TopPageComponentsProps } from './TopPageComponent.props'
import { Advantages, Htag, Product, Sort, Tag } from '@/components'
import { HhData } from '@/components/HhData/HhData'
import { TopLevelCategory } from '@/interfaces/toppage.interface'
import { SortEnum } from '@/components/Sort/Sort.props'
import { sortReducer } from './sort.reducer'

export const TopPageComponent = ({
  firstCategory,
  page,
  products,
}: TopPageComponentsProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = React.useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  })

  const setSort = (sort: SortEnum) => dispatchSort({ type: sort })

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'> {page.title}</Htag>
        <Tag color='grey' size='m'>
          {products && products.length}
        </Tag>
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>{sortedProducts && sortedProducts.map(p => <Product product={p} key={p._id} />)}</div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(t => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </div>
  )
}

//15-006
