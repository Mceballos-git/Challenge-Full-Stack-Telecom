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
INSERT INTO `client` VALUES (1,'Lucas','Tejeda',3234467621,'masculino','3516572769'),(3,'Lucas','Tejeda',3234467622,'masculino','3516572769'),(4,'Natalia','Moyano',323777,'femenino','0000'),(5,'Lucas','Tejeda',3234467624,'masculino','3516572769'),(6,'Lucas','Tejeda',3234467625,'masculino','3516572769'),(7,'Lucas','Tejeda',3234467626,'masculino','3516572769'),(8,'Lucas','Tejeda',3234467627,'masculino','3516572769'),(9,'Lucas','Tejeda',3234467628,'masculino','3516572769'),(10,'Lucas','Tejeda',3234467629,'masculino','3516572769'),(11,'Lucas','Tejeda',323446,'masculino','3516572769'),(14,'Lucas','Tejeda',3234423,'masculino','3516572769'),(15,'Lucas','Tejeda',3234425,'masculino','3516572769'),(16,'Lucas','Tejeda',3234422,'masculino','3516572769'),(17,'Lucas','Tejeda',3234426,'masculino','3516572769'),(18,'Lucas','Tejeda',32344289,'masculino','3516572769'),(19,'Lucas','Tejeda',32344282,'masculino','3516572769'),(20,'Lucas','Tejeda',32344284,'masculino','3516572769');
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
