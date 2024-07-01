import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book-route.js"; // Ensure correct path
import userRoute from "./route/user-route.js";
const app = express();
app.use(cors());
app.use(express.json());

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
const MongoDB = process.env.MongoDB;
try {
  mongoose.connect(MongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DB");
} catch (error) {
  console.log("Mongo Error: ", error);
}

app.get("/", (req, res) => {
  res.send("Hello ");
});

// Define routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
