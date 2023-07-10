import React, { forwardRef } from 'react'
import styles from './styles/BookCard.module.css'

import Link from 'next/link'

const BookCard = (
  { book, buttonAction = () => console.log('a'), buttonText = 'Click Here' },

  ref
) => {
  const addDefaultSrc = ev => {
    ev.target.src = '/no-image.png'
    ev.target.style.width = '200px'
    ev.target.style.height = '200px'
    ev.target.style.objectFit = 'cover'
  }

  return (
    <div className={styles['card-div']} ref={ref}>
      <div className={styles['img-div']}>
        <img
          className={styles.img}
          alt={book.title}
          onError={addDefaultSrc}
          src={book.book_image}
        />
      </div>
      <div className={styles['card-footer']}>
        <p className={styles['title']}>{book.title}</p>
        <span className={styles['description']}>{book.description}</span>
        <div className={styles['author-div']}>
          <span>Author: {book.author}</span>
        </div>
        <a target="_blank" href={book.amazon_product_url}>
          <div className={styles['button-div']}>
            <button className={styles['button']}>See on Amazon</button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default forwardRef(BookCard)
