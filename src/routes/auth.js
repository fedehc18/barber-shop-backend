const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
const UsersService = require("../services/users")
const { successResponse, errorResponse, removePassword } = require('../utils');
const dotenv = require("dotenv");

dotenv.config();

const usersService = new UsersService()

router.post("/login", async (req, res) => {
  try {
    const { id, fullName, password, email } = await usersService.getUserByUsername(req.body.email)

    if (!id) {
      return res.status(401).json("Wrong password or username!");
    }

    const isMatch = await bcrypt.compare(req.body.password, password)
    if (!isMatch) {
      return res.status(401).json("Wrong password or username!");
    }

    const accessToken = jwt.sign({ id, fullName, email },
      process.env.TOPSECRET,
      { expiresIn: "1d" }
    );

    return successResponse(req, res, { JWT: accessToken });
  } catch (error) {
    return errorResponse(req, res, error);
  }
});

module.exports = router;