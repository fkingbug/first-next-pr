import React from 'react'
import cn from 'classnames'
import styles from './Button.module.css'
import { IoIosArrowForward } from 'react-icons/io'

import { ButtonProps } from './Button.props'

export const Button = ({
  apperance,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: apperance === 'primary',
        [styles.ghost]: apperance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.right]: arrow === 'right',
          })}
        >
          <IoIosArrowForward />
        </span>
      )}
    </button>
  )
}
