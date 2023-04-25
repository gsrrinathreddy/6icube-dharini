import express  from "express";
import cors from 'cors';

const app=express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I have successfully complete my 1st api")
})
app.get("/AboutMe",(req,res)=>{
    res.json(
        {
            name:"Dharani",
            
        }
    )
})
app.get("/Experience",(req,res)=>{
    res.json(
        {
            experience:"Fresher"
        }
    )
})
app.get("/Qualification",(req,res)=>{
    res.json(
        {
            qualification:"Graduate"
        }
    )
})
app.get("/Hobbies",(req,res)=>{
    res.json(
        {
            hobbies:"Singing,Dancing,Listeniing music"
        }
    )
})
app.get("/Skills",(req,res)=>{
    res.json(
        {
            skills:"React,nodejs"
        }
    )
})
app.get("/Languages",(req,res)=>{
    res.json(
        {
            languages:"c,c++,java,PGDCA"
        }
    )
})

app.listen(8001,()=>{
    console.log("My server is running on port 8001")
})



