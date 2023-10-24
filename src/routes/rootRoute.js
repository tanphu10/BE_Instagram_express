import express from "express";
import userRoute from "./userRoute.js";
import photoRoute from "./photoRoute.js";
import commentRoute from "./commentRoute.js";
import likeRoute from "./likeRoute.js";

const rootRoute = express.Router();

rootRoute.use("/user", userRoute);
rootRoute.use("/photo", photoRoute);
rootRoute.use("/comment", commentRoute);
rootRoute.use("/like", likeRoute);
export default rootRoute;
