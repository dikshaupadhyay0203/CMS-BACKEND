import { getChatsByThreadService, sendChatService } from "../services/chat.service.js";
import mongoose from "mongoose";

export const getChatsByThread = async (req, res) => {
    try {
        const { threadId } = req.params;
        const chats = await getChatsByThreadService(threadId);
        return res.status(200).json({ success: true, chats });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }   

};

export const sendChat = async (req, res) => {
    try {
        const { receiverId, message } = req.body;

        if (!receiverId || !mongoose.Types.ObjectId.isValid(receiverId)) {
            return res.status(400).json({ success: false, message: "Invalid receiverId" });
        }

        const chat = await sendChatService({
            senderId: req.user.id,
            receiverId, 
            message
        });
        return res.status(200).json({ success: true, chat });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
