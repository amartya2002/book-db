"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineClockCircle } from "react-icons/ai";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Spinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const BookCard = ({ book }) => (
  <a href="/" className="group relative">
    <div className=" rounded-lg overflow-hidden shadow-md">
      <img
        src={"placeholder/book-placeholder-1-pexels-fatin-hisham.jpg"}
        alt={book.title}
        className="object-cover w-full h-full transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-stone-700/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-lg shadow-md border-2 border-stone-400 ">
        <div className="p-6 text-white text-sm overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-gray-200">{book.description}</p>
         
          <p className=" mt-1 text-xs ">Read More &#8594;</p>
        </div>
        
      </div>
    </div>

    <div className="flex items-baseline justify-between">
      <div>
        <h2 className="mt-2 text-sm font-medium text-gray-900  group-hover:text-blue-600 transition duration-300">
          {book.title}
        </h2>
        <p className="text-xs text-gray-500 mt-1">{book.authors}</p>
      </div>
      <div className="flex items-center text-xs text-gray-500">
        <AiOutlineClockCircle className="mr-1" /> {/* Add clock icon */}7 min
      </div>
    </div>
  </a>
);

export default function BookGrid() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${apiUrl}/books`);
        setBooks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-24">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
