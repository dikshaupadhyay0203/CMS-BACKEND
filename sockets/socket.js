import { sendChatService } from "../services/chat.service";

export const registerSocketHandlers = (io) => {

    const onlineUsers = new Map();

    io.on("connection", (socket) => {
        console.log("   User connected: ", socket.id);

        socket.on("user-online", (userId) => {
            onlineUsers.set(userId, socket.id);
            console.log("   User online: ", userId);
        });

        socket.on("send-message", async (data) => {
            try{
                const { senderId, receiverId, message } = data;
                const chat = await sendChatService({ senderId, receiverId, message });
                const receiverSocketId = onlineUsers.get(receiverId);
                if (receiverSocketId) {
                    io.to(receiverSocketId).emit("receive-message", chat);
                }catch(error){
                    console.error("Error sending message: ", error);
                }
            }
        }
