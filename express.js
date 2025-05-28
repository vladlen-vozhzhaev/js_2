const express = require('express');
const fs = require('fs');
const multer  = require('multer')
const app = express();
const upload = multer({ dest: 'uploads/' })

//app.use(express.urlencoded({extended: true}));

app.get('/traffic_light', (req, res)=>{
   fs.readFile('traffic_light.html', (err, data)=>{
       res.type('html').send(data);
   });
});
app.get('/login', (req, res)=>{
    fs.readFile('login.html', (err, data)=>{
        res.type('html').send(data);
    });
})
app.post('/login', upload.any(), (req, res)=>{
    console.log(req.body);
    res.send('OK');
});

app.listen(3000, ()=>{
    console.log("Сервер запущен, http://localhost:3000");
});