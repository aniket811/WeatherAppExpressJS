const express=require('express')
const PORT=5500
const app=express();
const weatherRoute=require('./routes/weather')

app.use(express.urlencoded({extended:true}))
app.listen(PORT,()=>{
    console.log("Server is running on " + PORT);
})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use("/",weatherRoute)

// Middler ware a