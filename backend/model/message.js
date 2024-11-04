// messages contain id, content, to, from
// schema validation with mongoose
import mongoose, { mongo, Schema } from "mongoose";

const Schema = mongoose.Schema;
const messageSchema = new Schema(
    {
        // id: {type: Number, required: true},
        from: {type: String, required: true},
        content: {type: String, required: true},
        to: {type: String, required: true}
    }, 
    {
        //save to collection proj_collection
        collection: "proj_collection"
    }
);

const db = mongoose.connection.useDb("teaching_proj");
const Message = db.model("Message", messageSchema)

export default Message;