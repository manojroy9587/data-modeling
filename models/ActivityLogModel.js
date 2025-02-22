const mongoose = require("mongoose")

const activityLogSchema = new mongoose.Schema({
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    action: { type: String, required: true }, // e.g., "Task Completed"
    timestamp: { type: Date, default: Date.now },
  });
  
  const ActivityLog = mongoose.model("ActivityLog", activityLogSchema);
  module.exports = ActivityLog;