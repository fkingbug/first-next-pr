import React from 'react'
import cn from 'classnames'
import styles from './Card.module.css'

import { CardProps } from './Card.props'

export const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  )
}
