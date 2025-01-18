import ChatBot from "../models/chatbot.model.js";

export const createChatbot = async(userId , businessId) =>{

   try{
    const chatbot = new ChatBot({ businessId});
    await chatbot.save();

    return chatbot;
   }
   catch(err){
    return err;
   }
}