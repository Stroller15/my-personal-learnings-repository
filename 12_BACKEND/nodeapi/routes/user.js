import express from "express";
import User from "../models/user.js";
import { getAllUsers,register } from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);

router.post("/new", register);

export default router;