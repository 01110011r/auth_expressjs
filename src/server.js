import express from "express";
import 'dotenv/config';
import { authRouter } from "./router/auth.router.js";
import { userRouter } from "./router/user.router.js";
const app=express();
function main() {
    try {
        app.use(express.json());
        app.use(userRouter)
        app.use(authRouter)
        app.use((err, req, res, next)=>{
           if(err)console.log(err.message);
            next();
        })
        app.listen(process.env.PORT, process.env.HOST, console.log(`done---> ${process.env.PORT}`))
    } catch (error) {
        console.log(error);
    }
};
main();