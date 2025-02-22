const express = require("express");
const mongoose = require("mongoose");
const Task = require("./models/Task"); // Import the Task model
const User = require("./models/User");

const app = express();
app.use(express.json());

mongoose
  .connect("your_mongodb_atlas_connection_string")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/tasks", async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const task = new Task({ title, description, user: userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
