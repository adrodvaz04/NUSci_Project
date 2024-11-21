import express from "express";
import MessageController from "../controller/message.controller.js";
import path from "path";
import route from "color-convert/route.js";

const router = express.Router(); 

router.route("/message/:id").get(MessageController.getMessageById);
router.route("/create-message").post(MessageController.postNewMessage);
router.put("/replace-message/:id", MessageController.replaceMessage);
router.patch("/update-message/:id", MessageController.updateMessage);
router.delete("/delete-message/:id", MessageController.deleteMessage);
router.route("/messages").get(MessageController.getMessages);

export default router;