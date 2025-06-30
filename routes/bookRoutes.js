import express from 'express';
import { addBook, getBookById, deleteBook ,updateBook} from '../controllers/bookController.js';

const router = express.Router();

router.post('/Addbook', addBook);
router.get('/GetBook', getBookById);
router.delete('/DeleteBook', deleteBook);
router.put('/updatebook', updateBook);


export default router;
