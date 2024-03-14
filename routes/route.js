let express = require("express");
let api = express.Router();

const userRouter = require('./router/user')
api.use("/user",userRouter)
module.exports = api