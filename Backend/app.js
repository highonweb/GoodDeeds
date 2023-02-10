const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
const { expressjwt: jwt } = require("express-jwt");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const NGORouter = require("./routes/NGO");

require("dotenv").config();

const app = express();
app.use(cors());
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI).then(() => {});
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", jwt({ secret: process.env.secret, algorithms: ["HS256"] }));
app.use("/users", usersRouter);
app.use("/NGO", jwt({ secret: process.env.secret, algorithms: ["HS256"] }));
app.use("/NGO", NGORouter);

module.exports = app;
