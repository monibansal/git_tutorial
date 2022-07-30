const path = require('path');
const  express =require('express');
const app=express();
const hbs=require('hbs');
// const staticpath= path.join(__dirname,'../public');
// app.use('/home',express.static(staticpath));
const partialspath=path.join(__dirname,'../hariom');
// const pathh=path.join(__dirname,'../views');
hbs.registerPartials(partialspath);
app.set('view engine','hbs');
// app.set('views','./views');
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/',(req,res)=>{
    res.send('hii this is home page');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.listen(4000,()=>{
    console.log('the port is ready to go');
})