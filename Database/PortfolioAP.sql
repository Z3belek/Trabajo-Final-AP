-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.24-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para portfolioap2
CREATE DATABASE IF NOT EXISTS `portfolioap2` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `portfolioap2`;

-- Volcando estructura para tabla portfolioap2.zz_aboutme
CREATE TABLE IF NOT EXISTS `zz_aboutme` (
  `Id` int(10) unsigned NOT NULL,
  `Name` text NOT NULL,
  `DTexto` longtext NOT NULL,
  `Skill1` text NOT NULL,
  `Skill2` text NOT NULL,
  `Skill3` text NOT NULL,
  `Percentage1` tinyint(4) NOT NULL DEFAULT 0,
  `Percentage2` tinyint(4) NOT NULL DEFAULT 0,
  `Percentage3` tinyint(4) NOT NULL DEFAULT 0,
  `Urlselfie` text NOT NULL,
  `Urlcv` text NOT NULL,
  `Linkedin` text NOT NULL,
  `Github` text NOT NULL,
  `Mail` text NOT NULL,
  `Pinterest` text NOT NULL,
  `PCompletados` smallint(6) NOT NULL,
  `CTomados` smallint(6) NOT NULL,
  `CSatisfactorios` smallint(6) NOT NULL,
  `Premios` smallint(6) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_education
CREATE TABLE IF NOT EXISTS `zz_education` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Year1` tinytext NOT NULL,
  `Year2` tinytext NOT NULL,
  `Level` tinytext NOT NULL,
  `Place` text NOT NULL,
  `DTexto` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_experience
CREATE TABLE IF NOT EXISTS `zz_experience` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Year1` tinytext NOT NULL,
  `Year2` tinytext NOT NULL,
  `Role` tinytext NOT NULL,
  `Place` text NOT NULL,
  `DTexto` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_project
CREATE TABLE IF NOT EXISTS `zz_project` (
  `Id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` tinytext NOT NULL,
  `type` tinytext NOT NULL,
  `place` text NOT NULL,
  `dtexto` text NOT NULL,
  `imgurl` text NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_roles
CREATE TABLE IF NOT EXISTS `zz_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_users
CREATE TABLE IF NOT EXISTS `zz_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKk9ga0t44hkj7pf7p9cjb9xr6u` (`username`),
  UNIQUE KEY `UK6x7hstc0hpxr7mt22ysib835x` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla portfolioap2.zz_user_roles
CREATE TABLE IF NOT EXISTS `zz_user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKps2abni7tp0agtro82x60t9ac` (`role_id`),
  CONSTRAINT `FKamukfc87xo6jdex4nl94pjjrm` FOREIGN KEY (`user_id`) REFERENCES `zz_users` (`id`),
  CONSTRAINT `FKps2abni7tp0agtro82x60t9ac` FOREIGN KEY (`role_id`) REFERENCES `zz_roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
