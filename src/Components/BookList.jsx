import React from 'react'
import BookShow from './BookShow'

function BookList({books}) {
    const renderBooks = books.map((book)=>{
        return <BookShow book={book} key={book.id}/>
    })
  return (
    <div className='book-list'>{renderBooks}</div>
  )
}

export default BookList