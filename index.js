var second = 0
var minute = 0
var hour = 0
var d = new Date()
var digi = document.getElementById("time")
setInterval(function() {
    d= new Date()
    second = d.getSeconds()
    minute = d.getMinutes()
    hour = d.getHours()
    digi.innerText=hour+"  :  "+minute+"  :  "+second

}, 1000);