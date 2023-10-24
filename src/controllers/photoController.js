import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { Sequelize } from "sequelize";
let model = initModels(sequelize);

const getAllPhoto = async (req, res) => {
  let data = await model.photos.findAll();
  res.send(data);
};

let Op = Sequelize.Op;
// console.log(Op);
const getPhotoByName = async (req, res) => {
  let { photo } = req.params;
  console.log("photo", photo);
  let data = await model.photos.findAll({
    where: {
      name_image: {
        [Op.like]: `%${photo}%`,
      },
    },
  });
  console.log(data);
  res.status(200).send(data);
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
const postPhoto = async (req, res) => {
  let { file } = req.body;
  console.log("file", file);
};



const deletePhoto = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  await model.photos.destroy({
    where: {
      photo_id: id,
    },
  });
  res.send("đã xóa thành công");
};

// getSavePhoto
export const getSavePhoto = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let checkSaveImg = await model.save_photo.findAll({
    where: {
      photo_id: id,
    },
  });
  console.log("checkSaveImg", checkSaveImg);
  if (!checkSaveImg.length) {
    res.send("lưu");
  } else {
    res.send("đã lưu");
  }
};

// lưu hình
const verifyPhoto = async (req, res) => {
  let data = req.body;
  let { user_id, photo_id } = data;
  console.log(data);
  let date_save = new Date();
  console.log(date_save);
  let checkSaveImg = await model.save_photo.findAll({
    where: { user_id, photo_id },
  });

  if (!checkSaveImg.length) {
    let newData = { user_id, photo_id, date_save };
    await model.save_photo.create(newData);
    res.send("đã lưu thành công");
  } else {
    res.send("hình này đã được lưu rồi");
  }
};

export {
  getAllPhoto,
  getPhotoByName,
  getPhotoUserId,
  getPhotoById,
  postPhoto,
  deletePhoto,
  verifyPhoto,
};
