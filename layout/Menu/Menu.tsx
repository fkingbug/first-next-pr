import { useContext } from 'react'
import styles from './Menu.module.css'
import cn from 'classnames'
import { AppContext } from '@/context/app.context'
import type { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface'

import { GiBilledCap } from 'react-icons/gi'
import { AiFillCloud } from 'react-icons/ai'
import { IoBookSharp } from 'react-icons/io5'
import { FiBox } from 'react-icons/fi'
import { TopLevelCategory } from '@/interfaces/toppage.interface'
import Link from 'next/link'
import { useRouter } from 'next/router'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <GiBilledCap />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <AiFillCloud />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Сервисы',
    icon: <IoBookSharp />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: <FiBox />,
    id: TopLevelCategory.Products,
  },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const router = useRouter()

  const openSecondLebel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map(m => {
          if (m._id.secondCategory === secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map(m => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id === firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => {
          if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLebel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(p => (
      <Link
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
        })}
      >
        {p.category}
      </Link>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
