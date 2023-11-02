import express from "express";
import {
  userSignUp,
  userLogIn,
  searchUser,
  uploadAvatar,
  updateInfoUser,
} from "../controllers/userController.js";
import { upload } from "../controllers/uploadController.js";
import { checkApi } from "../config/jwt.js";

const userRoute = express.Router();
// đăng kí
userRoute.post("/sign-up-user", userSignUp);
//  đăng nhập
userRoute.get("/log-in-user", userLogIn);
//  tìm kiếm theo tên người dùng
userRoute.get("/search/:name", checkApi, searchUser);
// upload avatar
userRoute.post("/upload-avatar", checkApi, upload.single("file"), uploadAvatar);
// update thông tin user
userRoute.put("/update-user", checkApi, updateInfoUser);

export default userRoute;
