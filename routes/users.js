import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router = express.Router()

import { verifyUser } from "../utils/verifyToken.js";

// update user

router.put("/:id", updateUser);

// delete user

router.delete("/:id", deleteUser);

// get single user

router.get("/:id",verifyUser, getSingleUser);

// get all user

router.get("/:id", getAllUser);
