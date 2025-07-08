const User = require("../models/User");
const {
  bcryptPassword,
  isPasswordBCryptValidated,
} = require("../utils/bcrypt");
const { createJWT } = require("../utils/tokenHandler");

const signUp = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // TODO: add validators if any here
    const newUser = await User.create({
      username: username,
      password: bcryptPassword(password),
      email: email,
    });
    const userToken = await createJWT({ user: newUser });
    // if (!userToken) {
    //   throw new ApiError({
    //     status: 503,
    //     source: { pointer: "publicController.js" },
    //     title: "Service Unavailable: Token Generation",
    //     detail: "Server having issue generating token.",
    //   });
    // }

    res.status(201).json({ user: newUser, token: userToken });
  } catch (error) {
    // next(error);
    res.json(error);
  }
};

module.exports = { signUp };
