CREATE DATABASE  IF NOT EXISTS `challengedb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `challengedb`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: challengedb
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `lastname` text NOT NULL,
  `dni` decimal(10,0) NOT NULL DEFAULT '0',
  `gender` text NOT NULL,
  `phone` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_fb529f57900726838c410fa83d` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'Lucas','Tejeda',80035941,'masculino','3516572769'),(2,'Lio','Messi',62267376,'masculino','3516572769'),(3,'Jose','Bracamonte',93851332,'masculino','3516572723'),(4,'Natalia','Moyano',60523495,'femenino','3543425136'),(5,'Ezequiel','Carrizo',38298316,'masculino','3513674385'),(6,'Beatriz','Revolleda',95224189,'femenino','3514893156'),(7,'Fernando','Ceballos',03689748,'masculino','3543689147'),(8,'Guillermo','Sanchez',86281909,'masculino','3513557933'),(9,'Juan','Belmonte',62059449,'masculino','3513652111'),(10,'Victor','Audisio',53353497,'masculino','3516572769'),(11,'Victor','Monte de oca',36368334,'masculino','3515981247'),(12,'Miguel','Moyano',18659345,'masculino','3515982247'),(13,'Carlos','Malaspina',28209433,'masculino','3515981248'),(14,'Adrian','Arietti',79116573,'masculino','3515981247'), (15,'Lucas','Martinez',24717339,'masculino','3515981241'),(16,'Carlos','Sosa',71596135,'masculino','3515981347'),(17,'Raul','Toro',73860556,'masculino','3515921247'),(18,'Facundo','Carballo',33472969,'masculino','3515981247'),(19,'Diego','Diaz',86061392,'masculino','3515981247'),(20,'Matias','Oller',47380014,'masculino','3515981247'),(21,'Ezequiel','Cantero',79404577,'masculino','3515381247'),(22,'Pablo','Cemino',30664960,'masculino','3515981247');
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-15  9:25:28
