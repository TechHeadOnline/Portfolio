const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("database NEA.db")
var express = require("express")
var socket = require("socket.io");
const { getActiveResourcesInfo } = require("process");
var app = express();
app.use(express.static("public"))
var server = app.listen(3000,function(){
    console.log("server running")
})

function connected(socket){
    console.log(socket.id + "has connected")
    socket.on("insert", function(data){
        insertHighScore(data)
    })
    socket.on("request", function(data){
        getActiveResourcesInfo(data)
    })
}