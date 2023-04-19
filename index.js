const express=require('express');
const app=express();
const path = require('path');
const redditData=require('./data.json');
// console.log(redditData);
app.use(express.static(path.join(__dirname,'public'));
app.set('views',path.join(__dirname,'/views'))

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render("home.ejs");
})
app.get('/cats',(req,res)=>{
    const cats=[
        'blue','rocket','monty','stephanie','winston'    ]
        res.render('cats',{cats});
})
app.get('/r/:subreddit',(req,res)=>
{
    const {subreddit}= req.params;
    const data= redditData[subreddit];
    //  console.log(data);

    res.render('subreddit',{...data});
})
app.get('/rand',(req,res)=>{
    const num = Math.floor( Math.random()*10) +1 ;
    res.render('random',{rand :num})
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})