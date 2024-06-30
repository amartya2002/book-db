"use client";
import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('Fetching books...');
        const response = await axios.get(`${apiUrl}/books`);
        console.log('Books fetched:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <div 
            key={book.id} 
            className="relative group bg-white rounded-lg overflow-hidden border shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="relative overflow-hidden h-48">
              <img
                src={'placeholder/book-placeholder-1-pexels-fatin-hisham.jpg'}
                alt={book.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p className="text-gray-700 italic mb-2">By {book.authors}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-gray-300">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
