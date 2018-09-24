const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const vhost = require('vhost');


const master = express();
const homepage = express();




var urlencodedParser = bodyParser.urlencoded({extended:true});


//==========================Middleware===================================//
homepage.set('views',path.join(__dirname,'homepage'));

homepage.set('view engine','ejs');

homepage.use(express.static(path.join(__dirname,'homepage')));

homepage.use(bodyParser.urlencoded({extended:true}));

//========================================================================//


//==========================Routes========================================//
master.listen(3000,()=>{
  console.log('Server Running.....');
});


//---------------------------Homepage-------------------------------------//
homepage.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'homepage', 'index.html'));
});






master.use(vhost('homepage',homepage));
