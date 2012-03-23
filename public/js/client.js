$(document).ready(function () {
    var socket = io.connect('http://vstr.herokuapp.com/');
    //var socket = io.connect('http://vslab.hjkim.c9.io/');
    socket.emit('join');
    
    
    socket.on('join', function(data) {
        alert("welcome");
    });
    
    socket.on('imgdata', function(data) {        
        console.log("imgdata==========");
        console.log(imgdata);
    });
    
    socket.on('drawImg', function(data) {
        console.log("drawImg");
        console.log(data);
        $("#outPutImg").attr("src",data);
    });
});