// imports
const express = require("express");
const { connectMongoDB } = require("./connection");
const taskRouter = require("./routes/taskRoutes");
const cors = require("cors");

// initializations
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// connection to Local Mongo DB
connectMongoDB("mongodb://localhost:27017/TodoData")
  .then(() => console.log("Connected to DB Successfully"))
  .catch((error) => console.log("Connection unsuccessful due to => ", error));


// middlewares
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use("/tasks", taskRouter);

// Running server on port 3000
app.listen(3000, () => console.log("Server running on port 3000"));
