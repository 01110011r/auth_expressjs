import { Router } from "express";
import { signIn } from "../controller/auth.controller.js";
export const authRouter=Router();
authRouter.post('/signin',signIn)
