'use client'
import styles from './styles/page.module.css'
import { useState, useEffect } from 'react'
import { getBooksList, getBooks } from '../services/BookServices'
import CustomDatalist from '@/components/CustomDatalist'
import BookCard from '@/components/BookCard'
export default function Home() {
  const [booksList, setBookLists] = useState([])
  const [books, setBooks] = useState([])
  const [endpoint, setEndpoint] = useState('hardcover-fiction')

  const handleSelect = option => {
    setEndpoint(option.list_name_encoded)
  }
  useEffect(() => {
    getBooksList().then(response => {
      setBookLists(response)
    })
  }, [])

  useEffect(() => {
    getBooks(endpoint).then(response => {
      setBooks(response.books)
    })
  }, [endpoint])
  console.log(books)
  return (
    <main>
      <div className={styles['search-div']}>
        <p>Choose the bestsellers list you want to explore</p>
        <CustomDatalist
          key={booksList}
          options={booksList}
          onSelect={handleSelect}
        />{' '}
      </div>
      <section className={styles['bookshelf-div']}>
        {books.map(book => {
          return <BookCard book={book} />
        })}
      </section>
    </main>
  )
}
