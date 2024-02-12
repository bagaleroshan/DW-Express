import { Router } from "express";

export let firstRouter = Router();
firstRouter
.route("/")//localhost:8000
.post((req,res,next) => {
    res.json("home post")
})
.get((req,res,next)=>{
    res.json("hello get")
})
.patch((req,res,next)=>{
    res.json("hello update")
})
.delete((req,res,next)=>{
    res.json("hello delete")
})          