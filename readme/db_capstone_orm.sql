/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `photo_id` int NOT NULL,
  `date_comment` datetime DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `user_id` (`user_id`),
  KEY `photo_id` (`photo_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`photo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `photos` (
  `photo_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `name_image` varchar(200) DEFAULT NULL,
  `path_` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`photo_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `save_photo` (
  `user_id` int NOT NULL,
  `photo_id` int NOT NULL,
  `date_save` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`,`photo_id`),
  KEY `photo_id` (`photo_id`),
  CONSTRAINT `save_photo_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `save_photo_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `photos` (`photo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pass_word` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `old` int NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `face_app_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comments` (`comment_id`, `user_id`, `photo_id`, `date_comment`, `content`) VALUES
(3, 4, 3, '2023-10-24 00:00:00', 'hình tào lao nha');
INSERT INTO `comments` (`comment_id`, `user_id`, `photo_id`, `date_comment`, `content`) VALUES
(4, 4, 3, '2023-10-24 00:00:00', 'hình tào 2 lao nha');
INSERT INTO `comments` (`comment_id`, `user_id`, `photo_id`, `date_comment`, `content`) VALUES
(12, 5, 4, '2023-11-02 00:00:00', 'chỉnh sửa lại ngày 16/11/2023');
INSERT INTO `comments` (`comment_id`, `user_id`, `photo_id`, `date_comment`, `content`) VALUES
(13, 5, 4, '2023-11-02 00:00:00', 'hình 4 này beautiful'),
(14, 5, 4, '2023-11-02 00:00:00', 'hình 4 này beautiful'),
(15, 5, 4, '2023-11-02 00:00:00', 'hình 4 này beautiful'),
(16, 5, 4, '2023-11-02 00:00:00', 'hình 4 này beautiful'),
(17, 5, 4, '2023-11-02 00:00:00', 'hình 4 này beautiful');

INSERT INTO `photos` (`photo_id`, `user_id`, `name_image`, `path_`, `description`) VALUES
(3, 3, 'image_3', 'image/', 'mô tả 3');
INSERT INTO `photos` (`photo_id`, `user_id`, `name_image`, `path_`, `description`) VALUES
(4, 1, 'image_1', 'image/', 'mô tả 1');
INSERT INTO `photos` (`photo_id`, `user_id`, `name_image`, `path_`, `description`) VALUES
(5, 1, 'image_4', 'image/', 'mô tả 4');
INSERT INTO `photos` (`photo_id`, `user_id`, `name_image`, `path_`, `description`) VALUES
(6, 2, 'image_2', 'image/', 'mô tả 2'),
(7, 3, 'image_3', 'image/', 'mô tả 3'),
(8, 5, '1700017115866_119878.jpg', NULL, 'daaaa'),
(9, 5, '1700017150245_119878.jpg', NULL, 'daaaa'),
(10, 5, '1700017199980_119878.jpg', 'D:\\04_BACK END\\Capstone\\01_capstone_express_orm\\public\\img\\1700017199980_119878.jpg', 'hình đẹp nè anh ơi'),
(11, 5, '1700017227051_119878.jpg', 'D:\\04_BACK END\\Capstone\\01_capstone_express_orm\\public\\img\\1700017227051_119878.jpg', 'hình đẹp nè anh ơi'),
(13, 5, '1700018012882_silk-3705336_1280.jpg', 'D:\\04_BACK END\\Capstone\\01_capstone_express_orm\\public\\img\\1700018012882_silk-3705336_1280.jpg', 'thấy cũng tạm tạm'),
(14, 5, '1700018026014_silk-3705336_1280.jpg', 'D:\\04_BACK END\\Capstone\\01_capstone_express_orm\\public\\img\\1700018026014_silk-3705336_1280.jpg', '');

INSERT INTO `save_photo` (`user_id`, `photo_id`, `date_save`) VALUES
(1, 4, '2023-11-15 03:25:27');
INSERT INTO `save_photo` (`user_id`, `photo_id`, `date_save`) VALUES
(3, 3, '2023-11-15 03:24:17');


INSERT INTO `users` (`id`, `email`, `pass_word`, `full_name`, `old`, `avatar`, `role`, `face_app_id`) VALUES
(1, 'leA@gmail.com', '1234', 'Lê A', 20, 'hinhanh1.jpg', 'admin', '1');
INSERT INTO `users` (`id`, `email`, `pass_word`, `full_name`, `old`, `avatar`, `role`, `face_app_id`) VALUES
(2, 'leB@gmail.com', '1234', 'Lê B', 21, 'hinhanh4.jpg', 'user', '');
INSERT INTO `users` (`id`, `email`, `pass_word`, `full_name`, `old`, `avatar`, `role`, `face_app_id`) VALUES
(3, 'leC@gmail.com', '1234', 'Lê C', 22, 'hinhanh3.jpg', 'user', '');
INSERT INTO `users` (`id`, `email`, `pass_word`, `full_name`, `old`, `avatar`, `role`, `face_app_id`) VALUES
(4, 'leD@gmail.com', '1234', 'Lê D', 23, 'hinhanh2.jpg', 'admin', ''),
(5, 'phantanphu12@gmail.com', '$2b$10$IwEGEz7dDRjaIs1hUHvqo.ByqRZZV/cTPBJOGjScMXvDAMydG436K', 'phan tấn phú aaa ', 28, '1698126352771_tanphu_.jpg', 'admin', ''),
(6, 'phantanphu15@gmail.com', '$2b$10$kP0O0VxkiGa6KB/HbJtfnOZeQ8JOAtSgvjA6uhui9NGq6.85uwDo6', 'tan phu phan ', 20, '1698137175632_tanphu2_.jpg', 'admin', ''),
(8, 'phantanphu10@gmail.com', '$2b$10$tsL7UXlZO.fxAAfR4ABtiuB9sKWBd.Zs9MO/CtkL2XHJ3RnCdp2w.', 'tan phu phan ', 20, '1700017966775_bali-1542569_1280.jpg', 'admin', ''),
(9, 'phantanphu1a@gmail.com', '$2b$10$XclRMt8pon3Q2id055y7/utWQSwoKwaU1I/MAaQXeldfwM2xM2eum', 'tan phu phan ', 20, 'img1.jpg', 'admin', '');


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;