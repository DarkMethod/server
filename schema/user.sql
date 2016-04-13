-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Apr 13, 2016 at 09:39 AM
-- Server version: 5.6.29
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yedupudi`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(12) NOT NULL,
  `uuid` varchar(64) NOT NULL,
  `googleId` varchar(128) NOT NULL,
  `facebookId` varchar(128) NOT NULL,
  `twitterId` varchar(128) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `verifyEmailToken` varchar(128) NOT NULL,
  `verifyEmailExpires` varchar(64) NOT NULL,
  `resetPasswordToken` varchar(128) NOT NULL,
  `resetPasswordExpires` varchar(64) CHARACTER SET ucs2 NOT NULL,
  `agrmntStatus` int(1) NOT NULL DEFAULT '0',
  `salt` varchar(32) NOT NULL,
  `hash` varchar(128) NOT NULL,
  `active` bit(1) NOT NULL DEFAULT b'0',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `uuid`, `googleId`, `facebookId`, `twitterId`, `name`, `email`, `password`, `verifyEmailToken`, `verifyEmailExpires`, `resetPasswordToken`, `resetPasswordExpires`, `agrmntStatus`, `salt`, `hash`, `active`, `updated`) VALUES
(76, '9249fbc5-5af6-4af8-8517-2a83ffb19753', '', '', '', 'Rohit Markam', 'mrmarkam@gmail.com', '', 'X1GyKFIk1VOzuQ0m8djs86CQw3w', '1460552182375', '', '', 0, 'f6e8fe4697845051810e8bdbe746ee85', 'e725deadbc27feaea7b8400d76ef92dcb431509aaab9ba5d71020e56e37d9d682d05c1c4e48a6b0308a60209a1d0aa982d4398dc8a5ad1dea48f83f6cf2d81a9', b'1', '2016-04-13 15:18:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `email_2` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
