import React from 'react'
import cn from 'classnames'
import styles from './Advantages.module.css'
import { AdvantagesProps } from './Advantages.props'

import { BsFillCheckCircleFill } from 'react-icons/bs'

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  console.log('advantages', advantages)
  return (
    <>
      {advantages.map(a => (
        <div key={a._id} className={styles.advantage}>
          <BsFillCheckCircleFill className={styles.checkStyle} />
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline} />
          <div>{a.description}</div>
        </div>
      ))}
    </>
  )
}
