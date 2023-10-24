import express from "express";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { where } from "sequelize";

let model = initModels(sequelize);

const getCommentByPhoto = async (req, res) => {
  let { photo } = req.params;
  let data = await model.comments.findAll({ where: { photo_id: photo } });
  res.send(data);
};

const getAllComment = async (req, res) => {
  let data = await model.comments.findAll();
  res.send(data);
};

const postComment = async (req, res) => {
  let data = req.body;
  console.log("data", data);
  await model.comments.create(data);
  res.send("thêm bình luận thành công");
};

const deleteComment = async (req, res) => {
  let { id } = req.params;
  await model.comments.destroy({ where: { comment_id: id } });
  res.send("đã xóa thành công");
};
const updateComment = async (req, res) => {
  let data = req.body;
  let { comment_id } = data;
  console.log(data);
  await model.comments.update(data, {
    where: {
      comment_id,
    },
  });
  res.send("update thành công");
};
export {
  getCommentByPhoto,
  getAllComment,
  postComment,
  deleteComment,
  updateComment,
};
