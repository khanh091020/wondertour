
module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log('a user connected');
        var usernames = [];
        // listen add user 
        socket.on('adduser', (name) => {
            socket.name = name;
            usernames.push(name);

            // notify to this user 
            let data = {
                sender : "SERVER",
                message : "You are join chat room of wonder place helper !"
            }
            socket.emit('update_message', data);

            let dataOther = {
                sender : "SERVER",
                message : name + " is join chat room of wonder place helper !"
            }
            socket.broadcast.emit("update_message",dataOther);
        })
        socket.on('sendMessage', (message) => {
            let data = {
                sender : "You",
                message : message
            }
            socket.emit("update_message",data);
            
             data = {
                sender : socket.name,
                message : message
            }
            socket.broadcast.emit("update_message",data);
        })

        // disconnect socket event
        socket.on("disconnect", (reason) => {
            for(let i=0;i<usernames.length;i++) {
                if(usernames[i] === socket.name) {
                    usernames.splice(i,1);
                }
            }
           let data = {
                sender : "SERVER",
                message : socket.name + " is left chat room."
            }
            socket.broadcast.emit("update_message",data);
          });
    });
     
}