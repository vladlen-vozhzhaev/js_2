const http = require("http");
const fs = require("fs");
const Busboy = require('busboy');

const server = http.createServer(async (req, res)=>{
    if(req.url === "/traffic_light"){
        fs.readFile("traffic_light.html", (err, data)=>{
            res.end(data);
        });
    }else if(req.url === "/login" && req.method==="GET"){
        fs.readFile("login.html", (err, data)=>{
            res.end(data);
        });
    }else if(req.url === "/login" && req.method==="POST"){
        const busboy = Busboy({headers: req.headers});
        const fields  = {};
        busboy.on('field', (name, value)=>{
            fields[name] = value;
        });
        busboy.on('finish', ()=>{
            console.log(fields);
            res.end('ok');
        });
        req.pipe(busboy);
        /*let chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', ()=>{
            console.log((chunks.concat(chunks)).toString());
            res.end("ok");
        });*/
    }else{
        res.end("404");
    }
})

server.listen(3000, ()=>console.log("Сервер запущен, http://localhost:3000"));