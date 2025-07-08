const express = require("express");
const router = express.Router();
const {
  signUp,
  //   signIn,
  //   showUser,
  //   indexProducts,
  //   showOneIndex,
  //   showVariantIndex,
} = require("../controllers/publicController");

//user routes
router.post("/sign-up", signUp);
// router.post("/sign-in", signIn);
// router.get("/users/:userUsername", showUser);

module.exports = router;
