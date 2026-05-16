import express from "express";

const app = express();
 
app.use(express.json());


import userRouter from './user.route.js';

//router declaration
app.user("/api/v1/users",userRouter);



export default app;