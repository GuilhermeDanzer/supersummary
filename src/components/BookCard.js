import React from 'react'
import styles from './styles/BookCard.module.css'

const BookCard = ({ book, buttonText = 'Click Here' }) => {
  const addDefaultSrc = ev => {
    ev.target.src = '/no-image.png'
    ev.target.style.width = '200px'
    ev.target.style.height = '200px'
    ev.target.style.objectFit = 'cover'
  }

  return (
    <div className={styles['card-div']}>
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
            <button className={styles['button']}>{buttonText}</button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BookCard
