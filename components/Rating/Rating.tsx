import React from 'react'
import cn from 'classnames'
import styles from './Rating.module.css'
import { AiFillStar } from 'react-icons/ai'
import type { RatingProps } from './Rating.props'

export const Rating = ({
  isEditable = false,
  setRating,
  rating,
  className,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = React.useState<JSX.Element[]>(new Array(5).fill(<></>))

  React.useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onCLick(i + 1)}
        >
          <AiFillStar
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: React.KeyboardEvent<SVGElement>) =>
              isEditable && handleSpase(i + 1, event)
            }
          />
        </span>
      )
    })
    setRatingArray(updatedArray)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructRating(i)
  }

  const onCLick = (i: number) => {
    if (!isEditable || !setRating) {
      return
    }
    setRating(i)
  }
  const handleSpase = (i: number, event: React.KeyboardEvent<SVGElement>) => {
    if (event.code !== 'Space' || !setRating) {
      return
    }
    setRating(i)
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}
