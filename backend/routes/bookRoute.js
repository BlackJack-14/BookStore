import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route to post books
router.post('/', async (req, res) => {
    try {
        const { Title, Author, PublishYear, ISBN, ImageURL, AmazonURL } = req.body;

        if (!Title || !Author || !PublishYear || !ISBN || !ImageURL || !AmazonURL) {
            console.log('Missing fields in request body:', req.body);
            return res.status(400).send({
                message: 'Please provide all required fields: Title, Author, PublishYear, ISBN, ImageURL, AmazonURL',
            });
        }

        // Check for duplicate ISBN
        const existingBook = await Book.findOne({ ISBN });
        if (existingBook) {
            console.log(`Book already exists with ISBN: ${ISBN}`, existingBook); // Log that the book already exists
            return res.status(409).send({
                message: 'Book Already Exists.',
            });
        }

        const newBook = new Book({ Title, Author, PublishYear, ISBN, ImageURL, AmazonURL });
        const book = await Book.create(newBook);

        console.log('Book created successfully:', book);
        return res.status(201).send(book);

    } catch (error) {
        console.log('Error occurred during book creation:', error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        console.log('Books Read', books);
        return res.status(200).json({
            count: books.length,
            data: books
        });


    } catch (error) {
        console.log('Error occurred while fetching books:', error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get a single book by ISBN
router.get('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const book = await Book.findOne({ ISBN: isbn });

        if (!book) {
            console.log(`Book not found with ISBN: ${isbn}`); // Log if book is not found
            return res.status(404).json({ message: 'Book not found' });
        }

        console.log('Fetched book details:', book); // Log the fetched book data
        return res.status(200).json({ data: book });

    } catch (error) {
        console.log('Error occurred while fetching book:', error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to update a book by ISBN
router.put('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const { Title, Author, PublishYear, ISBN, ImageURL, AmazonURL } = req.body;

        if (!Title || !Author || !PublishYear || !ISBN || !ImageURL || !AmazonURL) {
            console.log('Missing fields in request body:', req.body);
            return res.status(400).send({
                message: 'Please provide all required fields: Title, Author, PublishYear, ISBN, ImageURL, AmazonURL',
            });
        }

        const updatedBook = await Book.findOneAndUpdate({ ISBN: isbn }, req.body, { new: true });

        if (!updatedBook) {
            console.log(`Book not found with ISBN for update: ${isbn}`); // Log if book is not found for update
            return res.status(404).json({ message: 'Book not found' });
        }

        console.log('Book updated successfully:', updatedBook); // Log entire updated book data
        return res.status(200).json({ data: updatedBook });

    } catch (error) {
        console.log('Error occurred during book update:', error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to delete a book by ISBN
router.delete('/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const deletedBook = await Book.findOneAndDelete({ ISBN: isbn });

        if (!deletedBook) {
            console.log(`Book not found for deletion with ISBN: ${isbn}`); // Log if book is not found for deletion
            return res.status(404).json({ message: 'Book not found' });
        }

        console.log('Book deleted successfully:', deletedBook); // Log deleted book data
        return res.status(200).json({ message: 'Book deleted successfully' });

    } catch (error) {
        console.log('Error occurred during book deletion:', error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;