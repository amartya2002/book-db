const express = require('express');
const router = express.Router();
const { Book } = require('../models');
const booksController = require('../controllers/booksController');

// Route to create a new book
router.post('/', booksController.createBook);

// Route to retrieve all books
router.get('/', booksController.getAllBooks);

// Route to retrieve a book by ID
router.get('/:id', booksController.getBookById);

// Route to update a book by ID
router.put('/:id', booksController.updateBookById);

// Route to delete a book by ID
router.delete('/:id', booksController.deleteBookById);

module.exports = router;
