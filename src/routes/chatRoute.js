import express from "express";
import { getAllInbox } from "../controllers/chatController.js";

const chatRoute = express.Router();

chatRoute.get("/chat-inbox/:id", getAllInbox);
export default chatRoute;
