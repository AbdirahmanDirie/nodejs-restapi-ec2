const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    lastseen: {
      type: Date,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Number,
      enum: [0,1],
      default: 0
    },
    role:{
      type: String,
      enum: ["learner", "mentor", "writer"]
    },
  },

  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

module.exports = { User: user };
