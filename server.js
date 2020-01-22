if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Mongoose
const mongoose = require("mongoose");
mongoose.connect(process.env.ATLAS_URI, {
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
if (process.env.NODE_ENV === 'production') {

  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
