import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
let model = initModels(sequelize);

const getLikeByPhotoId = async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let data = await model.likes.findAll({ where: { photo_id: id } });
  res.send(data);
};
const postLike = async (req, res) => {
  let data = req.body;
  let { user_id, photo_id } = data;
  console.log(data);
  let checkData = await model.likes.findAll({
    where: { user_id, photo_id },
  });
  console.log(checkData);
  if (!checkData.length) {
    await model.likes.create(data);
    res.send("like thành công");
  } else {
    await model.likes.destroy({ where: { user_id, photo_id } });
    res.send("dislike thành công");
  }
};
export { getLikeByPhotoId, postLike };
