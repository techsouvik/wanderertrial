const express = require('express')

const app = express()

// app.use(express.json())

app.set('view engine','ejs')

app.use(express.static("public"))

app.get('/',(req,res)=>{
     res.render("index")
})
app.get('/about',(req,res)=>{
     res.render("about")
})
app.get('/package',(req,res)=>{
     res.render("package")
})
app.get('/contactus',(req,res)=>{
     res.render("contactus")
})
app.get('/coorg',(req,res)=>{
     res.render("coorg")
})
app.get('/login',(req,res)=>{
     res.render("login")
})

app.post('/register',(req,res)=>{
     
})


app.listen(80,(req,res)=>{
     console.log('SERVER is running at port 80')
})