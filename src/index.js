import express from "express";
import cors from "cors";
import rootRoute from "./routes/rootRoute.js";

const app = express();
app.use(express.json()); // hàm chèn middle ware trước khi FE truyền request tới BE

// chặn thông qua domain của FE
app.use(cors());

app.listen(8080); // => khởi tạo server BE nodejs với port tự động
app.use(rootRoute);

// localhost:8080/video/get-video
