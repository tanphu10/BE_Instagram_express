import express from "express";
import {
  getCommentByPhoto,
  getAllComment,
  postComment,
  deleteComment,
  updateComment,
} from "../controllers/commentController.js";
import { checkApi } from "../config/jwt.js";

const commentRoute = express.Router();

// get all comment
commentRoute.get("/get-all-comment", checkApi, getAllComment);

//  get comment theo id hình
commentRoute.get("/get-comment-by-photo/:photo", checkApi, getCommentByPhoto);

//  thêm comment
commentRoute.post("/post-comment", checkApi, postComment);

//  xóa comment
commentRoute.delete("/delete-comment/:id", checkApi, deleteComment);

// update comment

commentRoute.put("/update-comment/:id", checkApi, updateComment);
export default commentRoute;
