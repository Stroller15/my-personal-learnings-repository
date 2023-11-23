import express from "express";
import mongoose from "mongoose";
import path from "path";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", userSchema);

// using middlewares
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");

// !<------- main server logic --------->

app.get("/", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    res.render("logout");
  } else {
    res.render("login");
  }
});

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    const decoded = jwt.verify(token, "akdjdkdjkkdf");

    req.user = await User.findById(decoded._id);

    next();
  } else {
    res.render("login");
  }
};

app.get("/", isAuthenticated, (req, res) => {
    console.log(req.user)
  res.render("logout");
});

app.post("/login", async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({
    name,
    email,
  });

  const token = jwt.sign({ _id: user._id }, "akdjdkdjkkdf");
  res.cookie("token", token, {
    httponly: true,
    expires: new Date(Date.now() + 60 * 1000),
  });
  //   console.log(token);
  res.redirect("/");
}); 

app.get("/logout", (req, res) => {
  res.cookie("token", null, {
    httponly: true,
    expires: new Date(Date.now()),
  });
  res.redirect("/");
});

// ?<------- listen call of server -------------->
app.listen(5000, () => {
  console.log("server is running");
});
