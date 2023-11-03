const express = require("express");
const morgan = require("morgan");
const { getAllBooks, addBook } = require("./db");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get(
  "/books",
  (getAllBooksController = (req, res) => {
    const books = getAllBooks();
    res.send(books);
  })
);
app.post(
  "/books",
  (AddBookController = (req, res) => {
    const book = addBook({
      title: req.body.title,
      isbn: req.body.isbn,
    });
    res.send(book);
  })
);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
