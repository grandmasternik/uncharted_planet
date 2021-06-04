const express=require("express");
const app=express();
const port=3000;

// ============ROUTES============//
app.get("/",(req,res)=>{
    res.send('this is the new route')
});
// ============SERVER============//
app.listen(port,()=>{
    console.log(`I am listening on port ${port}`)
});