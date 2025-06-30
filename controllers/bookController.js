import Book from "../models/Book.js";

export const addBook = async (req, res) => {
  const { name, isbn, aisle, author } = req.body;

  const id = isbn + aisle;

  try {
    const book = new Book({ name, isbn, aisle, author, id });
    await book.save();
    res.status(200).json({ Msg: "successfully added", id: id });
  } catch (err) {
    res.status(500).json({ Msg: "error", error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const books = await Book.find({ id: req.query.id });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await Book.findOneAndDelete({ id });
    if (deleted) {
      res.status(200).json({ msg: "book is successfully deleted" });
    } else {
      res.status(404).json({ msg: "book not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const {id, name, isbn, aisle, author  } = req.body;

    const updated = await Book.findOneAndUpdate({ id },{name,isbn,aisle,author},{new:true});
    if (updated) {
      res.status(200).json({ msg: "book is successfully updated" });
    } else {
      res.status(404).json({ msg: "book not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
