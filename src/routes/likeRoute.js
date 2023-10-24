import express from "express";
import { getLikeByPhotoId, postLike } from "../controllers/likeController.js";
import { checkApi } from "../config/jwt.js";

const likeRoute = express.Router();
// get like theo id
likeRoute.get("/get-like-by-photo/:id",checkApi, getLikeByPhotoId);
// like và dislike
likeRoute.post("/post-like",checkApi, postLike);
export default likeRoute;
