var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust = require('dustjs-helpers'),
    app = express();

const { Client } = require('pg')
const client = new Client()
await client.connect()
const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()

app.get('/', function(req, res){
  console.log('TEST');
})

app.listen(3000, function(){
  console.log('Listening on port 3000, whoop!')
})
