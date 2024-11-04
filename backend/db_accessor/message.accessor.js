import Connection from "../db/connection.js";
import Message from "../model/message.js";

export default class MessageAccessor {
    static async getMessage(msge_id) {
        try {
            await Connection.open("teaching_proj");
            const msge = await Message.findOne({_id: msge_id});
            return msge;
        } catch (e) {throw e;}
    }

    static async createMessage(messageInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Message.create(messageInfo);

        } catch (e) {
            console.log("Failed");
        }
    }

    static async replaceMessage(msge_id, updatedInfo) {
        try {
            await Connection.open("teaching-pro");
            const msge = await Message.findOneAndReplace({_id: msge_id}, updatedInfo, {new: true, runValidators: true})
            return msge;
        } catch (e) {
            console.log("Failed due to", e); 
        }
    }


    static async updateMessage(msge_id, updatedInfo) {
        try {
            await Connection.open("teaching-proj");
            const msge = await Message.findOneAndUpdate({_id: msge_id}, {$set: updatedInfo}, {new:true, runValidators:true});
            return msge;
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }


    static async deleteMessage(msge_id) {
        try {
            await Connection.open("teaching_proj");
            const msge = await Message.findOneAndDelete({_id : msge_id});
            return msge
        } catch (e) {
            console.log("Failed due to", e)
        }
    }

}