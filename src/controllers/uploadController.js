import multer, { diskStorage } from "multer";

export const upload = multer({
  storage: diskStorage({
    destination: process.cwd() + "/public/img", // chứa đường dẫn mà file được lưu
    filename: (req, file, callback) => {
      let newName = new Date().getTime() + "_" + file.originalname; // không trùng  lấy theo mm giây=> 20231011151233999meo.jpg
      // convert  special tên file sang tiếng việt không dấu
      callback(null, newName);
    }, // đổi tên file hình
  }),
  // limits,
  // vị trí này giúp chúng ta giới hạn tấm hình bao nhiêu mb
});
