const express = require('express');
const app = express();

// app.get function ta use kora hoye jokhun ekta browser suppose ekta address likheche lovalhost:3000 tokhun sei server ta ki response ferot debe oi browser take
// ("/") hoccche first paramter jeta hocche homepage r location ta carry kore ekhane backslash or / === localhost:3000
// app.get("/",function(request,response){
//     // response.send("hello");
//     response.send(" <h1>hello</h1> ")
// })


// we will use shorthand for response and request for better life
// home page
app.get("/",function(req,res){
    // response.send("hello");
    res.send(" <h1>hello</h1> ")
});


// contact pg
app.get("/contact",function(req,res){
    // response.send("hello");
    res.send(" <h1>contact me at 8777093413</h1> ")
});

// about me pg
app.get("/about",function(req,res){
    // response.send("hello");
    res.send(" <h1>pb7 here a tech lover </h1> ")
});

app.get("/hobbies",function(req,res){
    // response.send("hello");
    res.send(" <h1>hobbies here  </h1> ")
});


// app.listen e listen hocche fn jeta sudhu sone ki ki request elo aar port no ta dite hoye jekhane server ta sudhu sunbe 
app.listen(3000, function(){
    console.log("server started on port 3000");
});