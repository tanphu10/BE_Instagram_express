import { Sequelize } from "sequelize";
import { createToken, decodeToken } from "../config/jwt.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcrypt";
let model = initModels(sequelize);

/* 1.đăng kí tài khoản */
const userSignUp = async (req, res) => {
  let { full_name, old, avatar, email, pass_word, role, face_app_id } =
    req.body;

  let checkEmail = await model.users.findAll({
    where: { email },
  });
  if (checkEmail.length) {
    res.send("email đã tồn tại");
    return;
  } else {
    let newPass = bcrypt.hashSync(pass_word, 10);
    let newData = {
      full_name,
      old,
      avatar,
      email,
      pass_word: newPass,
      role,
      face_app_id,
    };
    await model.users.create(newData);
    res.status(200).send("đăng kí thành công");
  }
};

/* 2.đăng nhập tài khoản */
const userLogIn = async (req, res) => {
  let { email, pass_word } = req.body;
  let checkEmail = await model.users.findOne({
    where: { email },
  });
  if (checkEmail) {
    let checkPass = bcrypt.compareSync(pass_word, checkEmail.pass_word);
    //  check passcle
    if (checkPass) {
      let token = createToken({ checkEmail });
      res.status(200).send(token);
    } else {
      res.send("pass_word không đúng");
    }
  }
  res.send("Email không đúng");
};

/*3.tìm kiếm tên user */
let Op = Sequelize.Op;
const searchUser = async (req, res) => {
  let { name } = req.params;
  let data = await model.users.findAll({
    where: {
      full_name: { [Op.like]: `%${name}%` },
    },
  });
  if (data.length > 0) {
    res.status(200).send(data);
  } else {
    res.send("không tìm thấy data");
  }
};

/* 4. upload avatar */
const uploadAvatar = async (req, res) => {
  let file = req.file;
  let { token } = req.headers;
  let infoUser = decodeToken(token);
  let { id } = infoUser.data.checkEmail;
  let getUser = await model.users.findByPk(id);
  let updateUser = { ...getUser, avatar: file.filename };
  await model.users.update(updateUser, { where: { id } });
  res.send(file);
};

/* 5.update thông tin user */
const updateInfoUser = async (req, res) => {
  let data = req.body;
  let { full_name, old, email, pass_word, role } = data;
  let { token } = req.headers;
  let infoUser = decodeToken(token);
  let { id, face_app_id, avatar } = infoUser.data.checkEmail;
  let newPass = bcrypt.hashSync(pass_word, 10);
  let newData = {
    full_name,
    old,
    avatar,
    email,
    pass_word: newPass,
    role,
    face_app_id,
  };
  await model.users.update(newData, { where: { id } });
  res.send("update thành công");
};
export { userSignUp, userLogIn, searchUser, uploadAvatar, updateInfoUser };
