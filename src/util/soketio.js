const moment = require('moment-timezone')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
var user = require('../app/controllers/models/account');
var comment = require('../app/controllers/models/comment');
var userArr = new Array();
var admin = [];

module.exports = function (io) {
    io.on('connection', (socket) => {
    
        /*  * * * BẮT ĐẦU XỬ LÍ CHO LIVE CHAT  * * * * * * */
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
            //     time : moment.utc(new Date().getUTCDate).tz("Asia/Saigon").format('DD/MM/YYYY HH:mm:ss')
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
                time : moment.utc(new Date().getUTCDate).tz("Asia/Saigon").format('DD/MM/YYYY HH:mm:ss')
            }
            socket.emit("update_message",data);
            
             data = {
                sender : socket.name,
                message : message,
                time : moment.utc(new Date().getUTCDate).tz("Asia/Saigon").format('DD/MM/YYYY HH:mm:ss'),
               
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

        //   let data = {
        //       sender : "WONDER PLACE",
        //       message : "Support is starting online !",
        //       time : moment.utc(new Date().getUTCDate).tz("Asia/Saigon").format('DD/MM/YYYY HH:mm:ss')
        //   }
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
        /******  ĐÓNG XỬ LÍ LIVE CHAT  ****** */



   /******  BẮT ĐẦU XỬ LÍ PHÂN REALTIME COMMENT   ****** */
      socket.on('addRoomComment', (data) => {
         socket.join(data)
         socket.room = data
      })

       socket.on('addComment',async (data) => {
           if(!socket.handshake.session.token) 
               return socket.emit('failAuth',{
                   success : false,
                   message : "YOU NEED LOGIN TO COMMENT"
               });
           
           let token = jwt.verify(socket.handshake.session.token,'mk');
           
           let userFind = await user.findOne({email : token.email})
              if(!userFind)  return socket.emit('failAuth',{
                  success : false,
                  message : "NOT AUTH YOUR ACOOUNT"
              }); 
          
              let obj = new comment({
                slugTour : data.slugTour,
                comment : data.comment,
                rate : data.rate ? data.rate : 5,
                accountID : userFind._id,
                nameAccount : userFind.lastName
              })
              let newComment;
              
          try {
             newComment = await obj.save();
          } catch (error) {
              console.error(error)
          }
           let countComment = await comment.countDocuments({slugTour : data.slugTour})
            io.in(socket.room).emit('appendComment',{
                newComment,
                countComment
            })
       })        


   /******  ĐÓNG XỬ LÍ REALTIME COMMENT  ****** */

      
    });
     
}