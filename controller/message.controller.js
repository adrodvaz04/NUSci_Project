import MessageAccessor from "../db_accessor/message.accessor";

export default class MessageController {
    static async getMessageById(req, res) {
        try {
            const m_id = req.params.id;
            const message = await MessageAccessor.getMessage(m_id);
            res.json(message);
        } catch (e) {throw e;}
    } 
}