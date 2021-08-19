var dateFormat = require("dateformat");
const { v4: uuidv4 } = require('uuid');
var userArr = new Array();
var admin = [];

module.exports = function (io) {
    io.on('connection', (socket) => {
      
        // console.log('a user connected');
        // listen add user 
        socket.on('adduser', (requset) => {
          
            socket.room = "room" + uuidv4();;
            let user = {
                name : requset.name,
                email : requset.email,
                id : socket.id,
                room : socket.room,
                active : false,
                conversation : requset.conversation
            }
            userArr.push(user);
            socket.join(socket.room);

            // notify to this user 
            // let data = {
            //     sender : "WONDER PLACE",
            //     message : "Welcome you to wonder place support !",
            //     time : dateFormat(new Date(), "h:MM TT")
            // }
            // socket.emit('update_message', data);
             
            
            if(admin.length !== 0) {
                // console.log(userArr)
                for(let item of admin) {
                    io.to(`${item._id}`).emit('update_online-user', userArr);
                }
            }
            // let dataOther = {
            //     sender : "SERVER",
            //     message : name + " is join chat room of wonder place helper !"
            // }
            // socket.broadcast.emit("update_message",dataOther);
        })

        socket.on("update_conversation", (data) => {
           for(let item of userArr) 
           {
               if(item.id === socket.id) {
                item.conversation = data
                if(admin.length !== 0) {
                    for(let itemAdmin of admin) {
                        io.to(`${itemAdmin._id}`).emit('update__notify-messeage', item.room);
                    }
                }
                break;
               }
           }
        })



        socket.on('sendMessage', (message) => {
            let data = {
                sender : "You",
                message : message,
                time : dateFormat(new Date(), "h:MM TT")
            }
            socket.emit("update_message",data);
            
             data = {
                sender : socket.name,
                message : message,
                time : dateFormat(new Date(), "h:MM TT"),
               
            }
            socket.to(socket.room).emit("update_message",data);
        })

        // disconnect socket event
        socket.on("disconnect", (reason) => {
          
            for(let i=0;i<userArr.length;i++) {
                if(userArr[i].id === socket.id) {
                    userArr.splice(i,1);
                    break;
                }
            }
            if(admin.length !== 0) {
                for(let item of admin) {
                    io.to(`${item._id}`).emit('update_online-user', userArr);
                }
            }

        //    let data = {
        //         sender : "WONDER PLACE",
        //         message : socket.name + " is left chat room."
        //     }
        //     socket.broadcast.emit("update_message",data);
          });

        // Event add admin to rooms

        socket.on('add_admin', () => {
          socket.name = 'SUPPORT';
          let newAdmin = {
            name : socket.name,
           _id : socket.id,
            room : socket.id
            }
          if(userArr.length !== 0) 
          {
               socket.join(userArr[0].room)
               newAdmin.room = userArr[0].room;
               userArr[0].active = true;
               socket.room = newAdmin.room;
            }
            
             admin.push(newAdmin);

          let data = {
              sender : "WONDER PLACE",
              message : "Support is starting online !",
              time : dateFormat(new Date(), "h:MM TT")
          }
        //   socket.broadcast.emit('update_message', data)
        
          socket.emit('online-user',userArr)
        })


        // change room admin
        socket.on('change_room', (data) => {
            socket.leave(socket.room)
            socket.join(data)
            
            socket.room = data
           
            for ( let item of admin) {
                item.active = false
                if(item._id === socket._id) 
                {
                    item.room = socket.room;
                    item.active = true
                }
            }

            for(let item of userArr) {
                if(item.room === socket.room) 
                {
                    socket.emit('update_conversation',item.conversation)
                  
                    break;
                }
            }
           
            
        })

        // notify
    });
     
}