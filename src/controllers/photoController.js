import { error } from "console";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";
import { createToken, decodeToken } from "../config/jwt.js";

let model = initModels(sequelize);

const getAllPhoto = async (req, res) => {
  let data = await model.photos.findAll();
  res.send(data);
};

let Op = Sequelize.Op;
const getPhotoByName = async (req, res) => {
  let { photo } = req.params;
  let data = await model.photos.findAll({
    where: {
      name_image: {
        [Op.like]: `%${photo}%`,
      },
    },
  });
  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.send("không tìm thấy data");
  }
};
const getPhotoUserId = async (req, res) => {
  let { userId } = req.params;
  let data = await model.photos.findAll({
    where: {
      user_id: userId,
    },
  });
  res.send(data);
};

const getPhotoById = async (req, res) => {
  let { id } = req.params;
  let data = await model.photos.findAll({
    where: {
      photo_id: id,
    },
  });
  res.status(200).send(data);
};
const uploadImage = async (req, res) => {
  let file = req.file;
  let { description } = req.body;
  let { token } = req.headers;
  let infoUser = decodeToken(token);
  let { id } = infoUser.data.checkEmail;
  let image = {
    name_image: file.filename,
    description: description,
    user_id: id,
    path_: file.path,
  };
  let newData = await model.photos.create(image);
  res.status(200).send(newData);
};

// getSavePhoto
export const getSavePhoto = async (req, res) => {
  let { id } = req.params;
  let checkSaveImg = await model.save_photo.findAll({
    where: {
      photo_id: id,
    },
  });
  let checkPhoto = await model.photos.findAll({ where: { photo_id: id } });
  if (!checkPhoto.length) {
    res.send("hình này không có trong data photo");
  } else {
    if (!checkSaveImg.length) {
      res.status(200).send("chưa được lưu");
    } else {
      res.send("đã lưu");
    }
  }
};

// lưu hình
const verifyPhoto = async (req, res) => {
  let data = req.body;
  let { user_id, photo_id } = data;
  let date_save = new Date();

  let checkPhoto = await model.photos.findAll({ where: { photo_id, user_id } });
  // console.log("checkPhoto", checkPhoto);
  let checkSaveImg = await model.save_photo.findAll({
    where: { user_id, photo_id },
  });

  if (checkPhoto.length > 0) {
    if (!checkSaveImg.length) {
      let newData = { user_id, photo_id, date_save };
      await model.save_photo.create(newData);
      res.status(200).send("đã lưu thành công");
    } else {
      res.send("hình này đã được lưu rồi");
    }
  } else {
    res.send("hình này không có trong database hoặc đã bị xóa khỏi database");
  }
};
const deletePhoto = async (req, res) => {
  let { id } = req.params;
  // ---xóa comment
  await model.comments.destroy({
    where: { photo_id: id },
  });
  // --xóa save hình
  await model.save_photo.destroy({
    where: { photo_id: id },
  });
  await model.photos.destroy({
    where: {
      photo_id: id,
    },
  });
  res.send(`đã xóa thành công photo ${id}`);
};

export {
  getAllPhoto,
  getPhotoByName,
  getPhotoUserId,
  getPhotoById,
  uploadImage,
  deletePhoto,
  verifyPhoto,
};
