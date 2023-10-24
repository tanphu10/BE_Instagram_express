import express from "express";
import {
  getAllPhoto,
  getPhotoByName,
  getPhotoUserId,
  getPhotoById,
  postPhoto,
  deletePhoto,
  verifyPhoto,
  getSavePhoto,
} from "../controllers/photoController.js";
import { upload } from "../controllers/uploadController.js";
import { checkApi } from "../config/jwt.js";

const photoRoute = express.Router();
// get all data image
photoRoute.get("/get-all-image", checkApi, getAllPhoto);
// search hình theo name_image
photoRoute.get("/search-image-by-name/:photo", checkApi, getPhotoByName);
// lấy all hình theo id user
photoRoute.get("/get-photo-by-user/:userId", checkApi, getPhotoUserId);
// lấy ảnh theo id ảnh
photoRoute.get("/get-photo-by-id/:id", checkApi, getPhotoById);
// thêm hình và status
photoRoute.post("/post-photo", checkApi, upload.array("file"), postPhoto);
// xóa hình ảnh
photoRoute.delete("/delete-photo/:id", checkApi, deletePhoto);
// // get verify photo
photoRoute.get("/get-save-photo/:id", checkApi, getSavePhoto);
// save photo
photoRoute.post("/verify-photo", checkApi, verifyPhoto);

export default photoRoute;
