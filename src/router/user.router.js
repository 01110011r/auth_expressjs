import { Router } from "express";
import { getUser, registUser } from "../controller/user.controller.js";
export const userRouter=Router();
userRouter.get('/user' ,getUser)
userRouter.post('/user', registUser);