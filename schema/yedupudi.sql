-- phpMyAdmin SQL Dump
-- version 4.6.0
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: May 25, 2016 at 07:05 PM
-- Server version: 5.6.30
-- PHP Version: 5.6.21

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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `uuid` varchar(64) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `salt` varchar(32) NOT NULL,
  `hash` varchar(128) NOT NULL,
  `resetPasswordToken` varchar(128) NOT NULL,
  `resetPasswordExpires` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`uuid`, `name`, `email`, `salt`, `hash`, `resetPasswordToken`, `resetPasswordExpires`) VALUES
('f8e77ae7-6724-4ca8-bb24-9256c009a38f', 'Rohit Markam', 'mrmarkam@gmail.com', '4e4a7ef8f428cdba9d5813d987034098', 'b7defac477125f3a498380b523c0433283636e2b6f05e6098bc30842d1f8182db5d70965e5c9c765282295428b0d8a3087c2151a7592f576b4b3e4d26be32c54', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `alias`
--

CREATE TABLE `alias` (
  `uuid` varchar(64) NOT NULL,
  `provider` varchar(10) NOT NULL,
  `providerId` varchar(128) NOT NULL,
  `providerEmail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Social identities of users';

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `uuid` varchar(64) NOT NULL,
  `service` varchar(100) NOT NULL,
  `items` varchar(300) NOT NULL,
  `message` varchar(500) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `dateOfRequest` varchar(60) NOT NULL,
  `start` varchar(60) NOT NULL,
  `end` varchar(60) NOT NULL,
  `paymentStatus` varchar(10) NOT NULL DEFAULT 'No',
  `price` varchar(60) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `quote`
--

INSERT INTO `quote` (`uuid`, `service`, `items`, `message`, `email`, `name`, `phone`, `dateOfRequest`, `start`, `end`, `paymentStatus`, `price`, `status`) VALUES
('585112c2-551d-4e09-80f4-29e0256a1ec3', 'document', 'Birth / Death certificates,Marriage Certificate,PAN Card Application,Other Documents Procurement', 'You can try to diagnose the problem by taking the following steps: \nGo to Start > Control Panel > Network and Internet > Network and Sharing Center > Troubleshoot Problems (at the bottom) > Internet Connections.', 'mrmarkam@gmail.com', 'Rohit Markam', '9893140190', '26/05/2016', '26-May-2016', '28-May-2016', 'No', '25000', 'Waiting For Information'),
('718a7cca-6022-4e5e-aca5-2e7baf7ec4d6', 'education', 'Monitoring Student (Academic and Personal),Setup And Monitor Coaching Classes, Tuition And Hostel,Admissions To Schools/Colleges,Fee payments', 'Apart from the previous settings, to configure the uib-datepicker you need to create an object in Javascript with all the options and use it on the datepicker-options attribute:', 'mrmarkam@gmail.com', 'Rohit Markam', '9893140190', '26/05/2016', '', '', 'No', 'Quote', '');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uuid` varchar(64) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(60) NOT NULL,
  `verifyEmailToken` varchar(128) NOT NULL,
  `verifyEmailExpires` varchar(64) NOT NULL,
  `resetPasswordToken` varchar(128) NOT NULL,
  `resetPasswordExpires` varchar(64) CHARACTER SET ucs2 NOT NULL,
  `agrmntStatus` int(1) NOT NULL DEFAULT '0',
  `salt` varchar(32) NOT NULL,
  `hash` varchar(128) NOT NULL,
  `active` int(1) NOT NULL DEFAULT '0',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uuid`, `name`, `email`, `phone`, `verifyEmailToken`, `verifyEmailExpires`, `resetPasswordToken`, `resetPasswordExpires`, `agrmntStatus`, `salt`, `hash`, `active`, `updated`) VALUES
('0b9b8c28-2b7e-4f35-9e39-4137972248c2', 'Rohit Markam', 'mrmarkam@gmail.com', '', 'e582932a571b388f2cf9129c81d8dd26', '1463510265484', '', '', 0, '6a5fda4927b580561d8ef46066ba3ed2', '19bcc9dfa15d604b7453503800fb0fa55ac416c17787bc87aa7ac469559495c85115674a959bef8b886d3f5fa6f241926484655bf3c6d21d57fde4e561517a41', 1, '2016-05-17 17:45:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD UNIQUE KEY `uuid` (`uuid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uuid`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `email_2` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
