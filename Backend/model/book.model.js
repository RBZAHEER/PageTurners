import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  bookname: String,
  category: String,
  mini_description: String,
  id: Number,
  price: Number,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
