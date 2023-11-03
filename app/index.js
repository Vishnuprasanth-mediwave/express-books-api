const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/books", booksRouter);

app.use(notfound);

// error handler middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
