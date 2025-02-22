const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reminderTime: { type: Date, required: true }, // When to notify the user
  isSent: { type: Boolean, default: false },
});

const Reminder = mongoose.model("Reminder", reminderSchema);
module.exports = Reminder;
