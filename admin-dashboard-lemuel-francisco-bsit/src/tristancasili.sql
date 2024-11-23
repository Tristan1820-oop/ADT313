-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 23, 2024 at 06:05 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `casts`
--

CREATE TABLE `casts` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `url` varchar(255) NOT NULL,
  `characterName` varchar(120) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tmdbId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  `popularity` float NOT NULL,
  `releaseDate` date NOT NULL,
  `voteAverage` float NOT NULL,
  `backdropPath` varchar(255) NOT NULL,
  `posterPath` varchar(255) NOT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `userId`, `tmdbId`, `title`, `overview`, `popularity`, `releaseDate`, `voteAverage`, `backdropPath`, `posterPath`, `isFeatured`, `dateCreated`, `dateUpdated`) VALUES
(0, 0, 299534, 'Avengers: Endgame', 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.', 117.802, '2019-04-24', 8.2, 'https://image.tmdb.org/t/p/original//7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg', 'https://image.tmdb.org/t/p/original//or06FN3Dka5tukK1e9sl16pB3iy.jpg', 0, '2024-11-23 03:58:23', NULL),
(0, 0, 45389, 'For Bad Boys Only', 'The Bad Boy Squad, a variety of private detective agency, is composed of King (Ekin Cheng Yi-kin), Queen (Kristy Yeung), and Jack (Louis Koo Tin-lok), whose primary source of business is the reuniting of clientèle with their first flames, and when the trio of young operatives returns to Hong Kong from an assignment in Thailand and the Squad\'s next three customers supply photographs of lost loves, the women in the pictures appear to be the same individual.', 3.989, '2000-12-15', 4.6, 'https://image.tmdb.org/t/p/original//AjVOXqxvEJkv2ftnYybXsi35eNQ.jpg', 'https://image.tmdb.org/t/p/original//tXcxPrggkR5jBBOGMMhAY2JWMez.jpg', 0, '2024-11-23 03:59:09', NULL),
(0, 0, 467181, 'Blurt!', 'When nice-guy Jeremy Martin puts on mysterious virtual reality glasses at the mall, he suddenly loses his “inside voice” and starts spouting every thought he has out loud. Making matters worse, Jeremy is running for student council president against his classmate Milly, who is full of great ideas to improve the school. Desperate to get back to normal, Jeremy and his sister Victoria must figure out how to convince his brain that he can speak up for himself.', 9.545, '2018-10-22', 7, 'https://image.tmdb.org/t/p/original//mz65vXFtcvQw0zLzmpX3nQqhC02.jpg', 'https://image.tmdb.org/t/p/original//q5JErRcwd5BwhftO86U5OzLFpga.jpg', 0, '2024-11-23 03:59:29', NULL),
(0, 0, 1182387, 'Armor', 'Armored truck security guard James Brody is working with his son Casey transporting millions of dollars between banks when a team of thieves led by Rook orchestrate a takeover of their truck to seize the riches. Following a violent car chase, Rook soon has the armored truck surrounded and James and Casey find themselves cornered onto a decrepit bridge.', 35.295, '2024-10-30', 4.8, 'https://image.tmdb.org/t/p/original//thDLoKyWdgK6EWXwGsjYqAFenuN.jpg', 'https://image.tmdb.org/t/p/original//pnXLFioDeftqjlCVlRmXvIdMsdP.jpg', 0, '2024-11-23 04:00:42', NULL),
(0, 0, 804406, 'The Piano Lesson', 'A brother and sister\'s battle over a prized heirloom piano unleashes haunting truths about how the past is perceived — and who defines a family legacy.', 26.25, '2024-11-07', 7.3, 'https://image.tmdb.org/t/p/original//oA5mqF9ZDAchHUw5od4RUXXcwJE.jpg', 'https://image.tmdb.org/t/p/original//2qzcxDbtRpHlcte7Df7JLMK84N.jpg', 0, '2024-11-23 04:01:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `middleName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `middleName`, `lastName`, `contactNo`, `role`) VALUES
(0, 'tristancasili18@gmail.com', 'cc3327f0eafa9f654ca0f2a1a98fcc7f', 'Tristan James ', 'Fernandez', 'Casili', '097168392824', 'admin'),
(0, 'tristancasili18@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'Tristan James ', 'Fernandez', 'Casili', '097168392824', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
