import { useState } from "react";
import BookCreate from "./Components/BookCreate";
import BookList from "./Components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const createBooks = (title) => {
    const updateBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
      },
    ];
    setBooks(updateBooks);
  };

  return (
      <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} />
        <BookCreate onCreate={createBooks} />
      </div>
  );
}

export default App;
