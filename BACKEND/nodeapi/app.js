import express from "express";
import mongoose from "mongoose";
import  User  from "./models/user.js";
import userRouter from "./routes/user.js"

const app = express();



// ! <------ Using middleware --------->
app.use(express.json());
app.use("/users",userRouter);


// ? <---------- Database ---------->
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backendapi",
  })
  .then(() => console.log("Database Connected"))
  .catch((e) => console.log(e));



// ! <------------- Main api ------------------>

app.get("/",  (req,res) => {
    res.send("hey i am shubh")
})


app.get("/userid/:id", async(req, res) => {
    const {id} = req.query;
    console.log(req.params);

    // const user = await User.findById(id);

    res.json({
        success: true,
        user: {},
    })
})


// ? <------------ sever listing --------------->
app.listen(4000, () => {
    console.log("server is working")
})