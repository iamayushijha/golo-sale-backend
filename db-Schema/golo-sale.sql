-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 07, 2026 at 05:31 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `golo-sale`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `bannerId` varchar(255) NOT NULL,
  `cityId` varchar(255) NOT NULL,
  `bannerImage` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `bannerType` enum('link','product','subscription','refer') NOT NULL,
  `updatedOn` datetime(6) NOT NULL,
  `createdOn` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `cityId` varchar(255) NOT NULL,
  `cityName` varchar(255) NOT NULL,
  `cityIcon` varchar(255) NOT NULL,
  `cityStatus` enum('active','inactive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `couponId` int(255) NOT NULL,
  `couponCode` varchar(255) NOT NULL,
  `couponInfo` varchar(255) NOT NULL,
  `discountPercentage` int(255) NOT NULL,
  `maxCap` int(255) NOT NULL,
  `minCap` int(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updateOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productCategory`
--

CREATE TABLE `productCategory` (
  `categoryId` varchar(255) NOT NULL,
  `categoryTitle` varchar(255) NOT NULL,
  `categoryInfo` varchar(255) NOT NULL,
  `categoryPicture` varchar(255) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updatedOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `productImages`
--

CREATE TABLE `productImages` (
  `productImageId` varchar(255) NOT NULL,
  `imagePath` varchar(255) NOT NULL,
  `imageInfo` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`imageInfo`)),
  `productId` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productId` varchar(255) NOT NULL,
  `productTitle` varchar(255) NOT NULL,
  `productInfo` varchar(255) NOT NULL,
  `productPrice` decimal(65,0) NOT NULL,
  `productMrp` decimal(65,0) NOT NULL,
  `productStock` int(255) NOT NULL,
  `productThumbnail` varchar(255) NOT NULL,
  `productCategoryId` varchar(255) NOT NULL,
  `hasSubscriptionModel` tinyint(1) NOT NULL DEFAULT 0,
  `status` enum('active','inactive') NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updatedOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settingsId` int(255) NOT NULL,
  `deliveryFreeAbove` int(255) NOT NULL,
  `deliveryFee` int(255) NOT NULL,
  `referReceiverComission` int(255) NOT NULL,
  `refereeComission` int(255) NOT NULL,
  `maintenanceMode` tinyint(1) NOT NULL,
  `paymentMethod` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`settingsId`, `deliveryFreeAbove`, `deliveryFee`, `referReceiverComission`, `refereeComission`, `maintenanceMode`, `paymentMethod`) VALUES
(1, 200, 40, 10, 20, 0, 'COD');

-- --------------------------------------------------------

--
-- Table structure for table `userAddress`
--

CREATE TABLE `userAddress` (
  `addressId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `holderName` text NOT NULL,
  `building` varchar(255) NOT NULL,
  `landmark` varchar(255) NOT NULL,
  `cityId` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `pincode` int(255) NOT NULL,
  `setAsDefault` tinyint(1) NOT NULL,
  `latitude` decimal(65,0) NOT NULL,
  `longitude` decimal(65,0) NOT NULL,
  `houseImage` varchar(255) NOT NULL,
  `addressType` enum('home','office','other') NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updatedOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userCart`
--

CREATE TABLE `userCart` (
  `cartId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `productId` varchar(255) NOT NULL,
  `productQty` int(255) NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updatedOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `userMobile` int(50) NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `gender` enum('male','female','other') NOT NULL,
  `walletAmount` decimal(50,0) NOT NULL DEFAULT 0,
  `refferalCode` varchar(255) NOT NULL,
  `otpCode` int(50) NOT NULL,
  `otpValidity` int(50) NOT NULL,
  `parentUserId` text NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `createdOn` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `updatedOn` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`bannerId`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`cityId`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`couponId`);

--
-- Indexes for table `productCategory`
--
ALTER TABLE `productCategory`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `productImages`
--
ALTER TABLE `productImages`
  ADD PRIMARY KEY (`productImageId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productId`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`settingsId`);

--
-- Indexes for table `userCart`
--
ALTER TABLE `userCart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
