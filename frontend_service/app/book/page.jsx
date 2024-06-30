"use client";

import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

const book = {
  title: "Sample Book Title",
  authors: "Author Name",
  description:
    "This is a detailed description of the sample book. It provides an in-depth look into the book's content, themes, and key takeaways.",
  summary:
    "In this riveting book, the protagonist sets off on an exhilarating adventure, navigating through a series of daunting challenges and unraveling deeply buried truths along the way. The plot unfolds with intricate twists and unexpected turns, weaving a tapestry of suspense and intrigue that keeps readers captivated from start to finish.",
  plot:
    "The story commences with the protagonist leading a seemingly ordinary life, which is abruptly transformed by the discovery of a mysterious artifact. As the journey unfolds, unexpected alliances are forged while formidable adversaries emerge, culminating in a gripping showdown that tests the protagonist's resolve and reshapes their destiny.",
  imageUrl: "placeholder/book-placeholder-1-pexels-fatin-hisham.jpg",
  readTime: "7 min",
  publisher: "Sample Publisher",
  publishDate: "January 1, 2023",
  isbn: "123-456-789",
  categories: ["Fiction", "Adventure"],
  tags: ["Journey", "Protagonist", "Challenges", "Compelling"],
  genre: "Adventure Fiction",
};

const tagColors = [
  "bg-red-100 text-red-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
];

const Tag = ({ children, colorClass }) => (
  <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full ${colorClass}`}>
    {children}
  </span>
);

const BookDetails = () => (
  <div className="container mx-auto lg:p-24 p-6">
    <div className="flex flex-col lg:flex-row mb-8">
      <div className="lg:w-1/3 mb-4 lg:mb-0">
        <img
          src={book.imageUrl}
          alt={book.title}
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
      <div className="lg:w-2/3 lg:ml-8">
        <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
        <p className="text-xl text-gray-700 mt-2">by {book.authors}</p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <AiOutlineClockCircle className="mr-1" /> {book.readTime}
        </div>
        <p className="text-gray-700 mt-4">{book.description}</p>
        <div className="mt-4 flex flex-wrap">
          {book.tags.map((tag, index) => (
            <Tag key={tag} colorClass={tagColors[index % tagColors.length]}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Summary</h3>
        <p className="text-gray-700 mt-2">{book.summary}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Plot</h3>
        <p className="text-gray-700 mt-2">{book.plot}</p>
      </div>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-900">Details</h3>
      <ul className="text-gray-700 mt-2 space-y-2">
        <li>
          <strong>Publisher:</strong> {book.publisher}
        </li>
        <li>
          <strong>Publish Date:</strong> {book.publishDate}
        </li>
        <li>
          <strong>ISBN:</strong> {book.isbn}
        </li>
        <li>
          <strong>Categories:</strong> {book.categories.join(", ")}
        </li>
        <li>
          <strong>Genre:</strong> {book.genre}
        </li>
      </ul>
      <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition duration-300">
        Read Now
      </button>
    </div>
    <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900">Suggested Reads</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">




      {/* Suggested book cards go here */}






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


    </div>
  </div>
  </div>
);

export default BookDetails;
