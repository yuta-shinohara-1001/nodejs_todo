const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "タスク名を入れてください。"],
    trim: true,
    maxlength: [20, "タスク名は２０文字以内で入力してください。"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
