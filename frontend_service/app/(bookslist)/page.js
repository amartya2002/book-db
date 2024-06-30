import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function IndexPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${apiUrl}/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <div>
              <h2>{book.title}</h2>
              <p>{book.author}</p>
              <p>{book.description}</p>
              {/* Add more details as needed */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
