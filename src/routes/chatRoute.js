// import express from "express";
// import { getAllInbox } from "../controllers/chatController.js";

// const chatRoute = express.Router();

// chatRoute.get("/get-chat-inbox/:id", getAllInbox);
// chatRoute.post("/post-chat-inbox");
// export default chatRoute;

// import { createServer } from "http";
// import { Server } from "socket.io";

// const app = express();
// const httpServer = createServer(app);
// const io = new Server(httpServer, {
//   cors: {
//     origin: "*",
//   },
// });

// io.on("connection", (socket) => {
//   // ...
//   socket.on("disconnect", (reason) => {
//     console.log(socket.id, reason);
//   });
// });

// httpServer.listen(8080);
