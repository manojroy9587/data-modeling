const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "done"],
      default: "pending",
    },
    user: { type: mongoose.Schema.Types.ObjectId, require: true },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
