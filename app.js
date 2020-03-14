const express = require("express");
const app = express();


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use(express.static('public'));
app.use(express.static('images'));

app.get("/index", (req,res) =>{
    return res.sendFile(__dirname + '/public/index.html');
});

app.get("/javascript",(req,res)=>{
    return res.sendFile(__dirname + '/public/javascript.html');
});

app.get("/packages",(req,res)=>{
    return res.sendFile(__dirname + '/public/packages.html');
});

app.get("/server", (req, res) =>{
    return res.sendFile(__dirname + '/public/server.html');
})

app.get("/client", (req, res) =>{
    return res.sendFile(__dirname + '/public/client.html');
})

app.get("/restful", (req, res) =>{
    return res.sendFile(__dirname + '/public/restful.html');
})

const port = process.env.PORT ? process.env.PORT: 3000;

const server = app.listen(port, (error) => {
    if(error) {
        console.log("Error running the server");
    }
    else {
        console.log("Server is running on port", server.address().port);
    }
});
