if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  console.log('dotenv added')
}

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", err => console.error(err));
db.once("open", () => console.log("Connected to Mongoose"));

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

// Utilize routes
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
