const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Username is required"],
      lowercase: true,
      trim: true,
      match: [
        /^[a-z0-9_-]+$/,
        "Username can only contain lowercase letters, numbers, hyphens, and underscores",
      ],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      trim: true,
      match: [
        /^[-.\w]+@[-.\w]+\.[-.\w]{2,}$/,
        `Email needs to be in correct format`,
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    firstName: {
      type: String,
      trim: true,
      minLength: [2, "Expecting min. 2 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [2, "Expecting min. 2 characters"],
    },
    gender: {
      type: String,
      trim: true,
      enum: {
        values: ["M", "F"],
        message: "Gender must be one of the stored gender types",
      },
    },
    profilePhoto: {
      type: String,
      default: "https://www.gravatar.com/avatar/?d=mp",
    },
    defaultShippingAddress: { type: String, trim: true },
  },
  { timestamps: true }
);

// Remove password
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.password;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
