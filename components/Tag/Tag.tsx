import React from 'react'
import cn from 'classnames'
import styles from './Tag.module.css'

import type { TagProps } from './Tag.props'

export const Tag = ({
  href,
  children,
  className,
  size = 'm',
  color = 'ghost',
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}> {children}</a> : <>{children}</>}
    </div>
  )
}
