// import express from "express";
// import initModels from "../models/init-models.js";
// import sequelize from "../models/connect.js";

// let model = initModels(sequelize);

// const getAllInbox = async (req, res) => {
//   let { id } = req.params;
//   let data = await model.room_user.findAll({
//     where: {
//       room_id: id,
//     },
//     include: ["room", "user"],
//   });
//   res.send(data);
// };

// export { getAllInbox };
