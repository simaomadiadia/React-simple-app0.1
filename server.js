
 //"start": "react-scripts start",
 //"build": "react-scripts build",

const express = require("express")
const path = require("path")


const app= express();

app.use(express.static(path.join(__dirname,'build')));
app.set('port',process.env.Port || 3000);

const server = app.listen(app.get('port',function(){
    console.log('listening on port ', server.address().port);
}));