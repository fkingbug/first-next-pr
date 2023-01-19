import React from 'react'
import cn from 'classnames'
import styles from './Search.module.css'

import { Searchrops } from './Search.props'
import { Button } from '../Button/Button'
import { ImSearch } from 'react-icons/im'
import { Input } from '../Input/Input'
import { useRouter } from 'next/router'

export const Search = ({ className, ...props }: Searchrops): JSX.Element => {
  const [search, setSearch] = React.useState<string>('')

  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      goToSearch()
    }
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        placeholder='Pouck...'
        type='text'
        className={styles.input}
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button apperance='primary' className={styles.button} onClick={goToSearch}>
        <ImSearch />
      </Button>
    </div>
  )
}
