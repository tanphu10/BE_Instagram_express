import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _comments from  "./comments.js";
import _photos from  "./photos.js";
import _save_photo from  "./save_photo.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const comments = _comments.init(sequelize, DataTypes);
  const photos = _photos.init(sequelize, DataTypes);
  const save_photo = _save_photo.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  photos.belongsToMany(users, { as: 'user_id_users', through: save_photo, foreignKey: "photo_id", otherKey: "user_id" });
  users.belongsToMany(photos, { as: 'photo_id_photos', through: save_photo, foreignKey: "user_id", otherKey: "photo_id" });
  comments.belongsTo(photos, { as: "photo", foreignKey: "photo_id"});
  photos.hasMany(comments, { as: "comments", foreignKey: "photo_id"});
  save_photo.belongsTo(photos, { as: "photo", foreignKey: "photo_id"});
  photos.hasMany(save_photo, { as: "save_photos", foreignKey: "photo_id"});
  comments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(comments, { as: "comments", foreignKey: "user_id"});
  photos.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(photos, { as: "photos", foreignKey: "user_id"});
  save_photo.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(save_photo, { as: "save_photos", foreignKey: "user_id"});

  return {
    comments,
    photos,
    save_photo,
    users,
  };
}
