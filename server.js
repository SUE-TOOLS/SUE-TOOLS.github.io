import express from "express";
import fetch from "node-fetch";

const app = express();

app.use(express.json());

app.post("/ask", async (req,res)=>{

let question = req.body.question;

let response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer YOUR_API_KEY"
},

body:JSON.stringify({
model:"gpt-3.5-turbo",
messages:[
{role:"user",content:question}
]
})

});

let data = await response.json();

res.json(data);

});

app.listen(3000, ()=>{
console.log("Server running");
});
