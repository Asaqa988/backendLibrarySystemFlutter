import Author from "../models/Author.js";

export const AddAuthor = async (req, res) => {
  const { name, Id, nationallity, email, dateOfBirth, phoneNumber } = req.body;

  const bio = name + " was born " + dateOfBirth;

  try {
    const author = new Author({
      name,
      Id,
      nationallity,
      email,
      dateOfBirth,
      phoneNumber,
      bio,
    });

    await author.save();
    res.status(200).json({ Msg: "Author has been successfully added", id: Id });
  } catch (err) {
    res.status(500).json({ Msg: "Author was not added", error: err.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.find({ ID: req.query.ID });
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { ID } = req.body;
    const deleted = await Author.findOneAndDelete({ ID });
    if (deleted) {
      res.status(200).json({ msg: "Author is successfully deleted" });
    } else {
      res.status(404).json({ msg: "Author not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
