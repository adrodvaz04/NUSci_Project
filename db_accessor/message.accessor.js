import Connection from "../db/connection.js";
import Message from "../model/message.js";

export default class MessageAccessor {
    static async getMessage(msge_id) {
        try {
            await Connection.open("teaching_proj");
            const msge = await Message.findOne({id: msge_id});
            return msge;
        } catch (e) {throw e;}
    }
}