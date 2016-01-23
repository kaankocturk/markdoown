'use strict';
var marked = require('marked');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var arr;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function(req,res){
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
 });

 app.get('/markit', function(req,res){
   let html = fs.readFileSync('./text.json').toString();
   res.send(html);
  });

app.post('/markthat', function(req,res){
      console.log(marked(req.body.markit));
  fs.writeFile('./text.json', JSON.stringify(marked(req.body.markit)), function(err) {
    if (err) throw err;
  });
  res.send('dsfdsf');
});

app.listen(4000, function(){
  console.log('express server listenin on 4000');
});
