var net = require('net')
var portNum = process.argv[2];
var server = net.createServer(function (socket) {
    var currTimeObj = new Date();
    var dateStr = currTimeObj.getFullYear()+
        "-"+(currTimeObj.getMonth()+1).toString().padLeft('0', 2)+
        "-"+currTimeObj.getDate().toString().padLeft('0', 2)+
        " "+currTimeObj.getHours().toString().padLeft('0', 2)+
        ":"+currTimeObj.getMinutes();
    socket.write(dateStr+"\r\n");
    socket.destroy();
    // socket handling logic  
})
server.listen(portNum);

String.prototype.padLeft = function(char, length) {
    return char.repeat(Math.max(0, length - this.length)) + this;
}

String.prototype.repeat = String.prototype.repeat || function(n){
        return n<=1 ? this : (this + this.repeat(n-1));
    }