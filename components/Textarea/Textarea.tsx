import React from 'react'
import cn from 'classnames'
import styles from './Textarea.module.css'

import { TextAreaProps } from './Textarea.props'

export const Textarea = ({ className, ...props }: TextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />
}
