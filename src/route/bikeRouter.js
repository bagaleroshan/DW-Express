import { Router } from "express";

export let bikeRouter = Router();
bikeRouter
.route("/")//localhost:8000/bike
.post((req,res,next)=>{
    console.log(req.body)
    res.json("bike post")
    
})
.get((req,res,next)=>{
    res.json("bike get")
})
.patch((req,res,next)=>{
    res.json("bike update")
})
.delete((req,res,next)=>{
    res.json("bike delete")
})

//git remote -v //check
//git remote remove origin