import React from 'react'
import cn from 'classnames'
import styles from './HhData.module.css'
import { HhDataProps } from './HhData.props'
import { Card } from '../Card/Card'
import { MdStars } from 'react-icons/md'
import { priceRu } from '@/helpers/helpers'
export const HhData = ({
  count,
  juniorSalary,
  seniorSalary,
  middleSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.rate}>
            <MdStars className={styles.filed} />
            <MdStars />
            <MdStars />
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.rate}>
            <MdStars className={styles.filed} />
            <MdStars />
            <MdStars />
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.rate}>
            <MdStars className={styles.filed} />
            <MdStars />
            <MdStars />
          </div>
        </div>
      </Card>
    </div>
  )
}
