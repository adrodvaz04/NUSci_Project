import MessageAccessor from "../db_accessor/message.accessor.js";

export default class MessageController {
    static async getMessageById(req, res) {
        try {
            const m_id = req.params._id;
            const message = await MessageAccessor.getMessage(m_id);
            res.json(message);
        } catch (e) {throw e;}
    } 


    static async postNewMessage(req, res) {
        try {
            await MessageAccessor.createMessage(req.body);
            res.redirect("/");
        } catch (e) {
            console.log("Failed");
        }
    }



    static async replaceMessage(req, res) {
        try {
            const m_id = req.params._id;
            const updated_vals = req.body;
            const updated_msg = await MessageAccessor.replaceMessage(m_id, updated_vals);
            res.json(updated_msg);

        } catch (e) {
            console.log("Failed due to:", e)
        }
    }


    static async updateMessage(req,res) {
        try {
            const m_id = req.params._id;
            const updated_val = req.body;
            const updated_msg = await MessageAccessor.updateMessage(m_id, updated_val);
            res.json(updated_msg);
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }


    static async deleteMessage(req, res) {
        try {
            const m_id = req.params._id;
            const deletion = await MessageAccessor.deleteMessage(m_id);
            res.direct("/");
            
        } catch (e) {
            console.log("Failed due to:", e);
        }
    }

    static async getMessages(req, res) {
        try {
            const messages = await MessageAccessor.getMessages();
            res.json(messages);
            return messages;
        } catch (e) {
            console.log("Failed:", e);
        }
    }
}