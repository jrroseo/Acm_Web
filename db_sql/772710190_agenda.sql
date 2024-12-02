-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 24/11/2024 às 13:15
-- Versão do servidor: 10.11.9-MariaDB
-- Versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u772710190_agenda`
--
CREATE DATABASE `u772710190_agenda`;
USE `u772710190_agenda`; 
-- --------------------------------------------------------
--
-- Estrutura para tabela `agenda`
--

CREATE TABLE `agenda` (
  `id_agenda` int(11) NOT NULL,
  `id_me` int(11) NOT NULL,
  `data_inicio` datetime NOT NULL,
  `id_user` int(11) NOT NULL,
  `data_fin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `agenda`
--

INSERT INTO `agenda` (`id_agenda`, `id_me`, `data_inicio`, `id_user`, `data_fin`) VALUES
(57, 2, '2024-11-13 08:00:00', 4, '2024-11-13 09:00:00'),
(58, 4, '2024-11-13 09:30:00', 4, '2024-11-13 10:00:00'),
(59, 4, '2024-11-14 09:00:00', 4, '2024-11-14 10:00:00'),
(60, 2, '2024-11-15 07:30:00', 4, '2024-11-15 08:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `datas`
--

CREATE TABLE `datas` (
  `id_fe` int(11) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `datas`
--

INSERT INTO `datas` (`id_fe`, `data`) VALUES
(1, '2022-11-03 00:00:00'),
(2, '2022-11-03 00:00:00'),
(3, '2022-11-03 00:00:00'),
(4, '2022-11-03 15:00:00'),
(5, '2022-11-03 18:00:00');

-- --------------------------------------------------------

--
-- Estrutura para tabela `especialidad`
--

CREATE TABLE `especialidad` (
  `id_especialidad` int(11) NOT NULL,
  `nome` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `especialidad`
--

INSERT INTO `especialidad` (`id_especialidad`, `nome`) VALUES
(1, 'ACUPUNTURA'),
(2, 'ALERGIA'),
(3, 'ANESTESISTA'),
(4, ' AUDIOMETRIA'),
(5, 'CARDIOLOGIA'),
(6, 'CLÍNICA_MÉDICA'),
(7, 'CIRURGIA_CABEÇA_PESCOÇO'),
(8, 'CIRURGIA DE MÃO'),
(9, 'CIRURGIA_PLÁSTICA'),
(10, 'CIRURGIA_TORÁCICA'),
(11, 'CIRURGIA_VASCULAR'),
(12, 'DERMATOLOGIA'),
(13, 'ENDOCRINOLOGIA'),
(14, 'FISIATRIA'),
(15, 'FISIOTERAPIA'),
(16, ' FONOAUDIOLOGIA'),
(17, 'GASTROCLÍNICA'),
(18, 'GASTROCIRURGIA'),
(19, 'GERONTO_GERIATRIA'),
(20, 'GINECOLOGIA '),
(21, 'HEMATOLOGIA'),
(22, 'HOMEOPATIA'),
(23, 'MOLÉSTIAS_INFECCIOSAS'),
(24, 'NEFROLOGIA'),
(25, 'NEUROCLÍNICA'),
(26, 'NEUROINFANTIL'),
(27, 'NEUROCIRURGIA'),
(28, 'NUTRIÇÃO'),
(29, 'OBSTETRÍCIA/PRÉ-NATAL'),
(30, 'ODONTOLOGIA '),
(31, 'OFTALMO GERAL'),
(32, 'OFTALMOLOGIA-GLAUCOMA'),
(33, 'ONCOLOGIA'),
(34, 'ORTOPEDIA GERAL'),
(35, 'OTORRINO GERAL'),
(36, 'PNEUMOLOGIA'),
(37, 'PEDIATRIA_HEBIATRIA'),
(38, 'PSICOLOGIA_ADULTO'),
(39, 'PSIQUIATRIA_ESPECIALIDADES'),
(40, 'PROCTOLOGIA'),
(41, 'REUMATOLOGIA'),
(42, 'TERAPIA_OCUPACIONAL'),
(43, 'UROLOGIA');

-- --------------------------------------------------------

--
-- Estrutura para tabela `medico`
--

CREATE TABLE `medico` (
  `id_medico` int(11) NOT NULL,
  `nome_medico` varchar(100) NOT NULL,
  `RH` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `medico`
--

INSERT INTO `medico` (`id_medico`, `nome_medico`, `RH`) VALUES
(1, 'Dr. Ana Clara Silva', 12345),
(2, 'Dr. Bruno Mendes', 12346),
(3, 'Dr. Carlos Alberto Costa', 12347),
(4, 'Dra. Daniela Pereira', 12348),
(5, 'Dr. Eduardo Lima', 12349),
(6, 'Dr. Fernanda Oliveira', 12350),
(7, 'Dr. Gabriel Santos', 12351),
(8, 'Dra. Helena Martins', 12352),
(9, 'Dr. Igor Ribeiro', 12353),
(10, 'Dra. Juliana Almeida', 12354),
(11, 'Dr. Lucas Ferreira', 12355),
(12, 'Dra. Mariana Rocha', 12356),
(13, 'Dr. Nuno Carvalho', 12357),
(14, 'Dra. Olivia Costa', 12358);

-- --------------------------------------------------------

--
-- Estrutura para tabela `medico_especialidad`
--

CREATE TABLE `medico_especialidad` (
  `id_me` int(11) NOT NULL,
  `id_medico` int(11) NOT NULL,
  `id_especialidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `medico_especialidad`
--

INSERT INTO `medico_especialidad` (`id_me`, `id_medico`, `id_especialidad`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10),
(11, 11, 11),
(12, 12, 12),
(13, 13, 13),
(14, 14, 14);

-- --------------------------------------------------------

--
-- Estrutura para tabela `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Despejando dados para a tabela `permisos`
--

INSERT INTO `permisos` (`id`, `rol`) VALUES
(1, 'Administrador'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sangre`
--

CREATE TABLE `sangre` (
  `id_tipo` int(11) NOT NULL,
  `tipo_sangre` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `sangre`
--

INSERT INTO `sangre` (`id_tipo`, `tipo_sangre`) VALUES
(1, 'O+'),
(2, 'O-'),
(3, 'A-'),
(4, 'A+'),
(5, 'B+'),
(6, 'B-'),
(7, 'AB+'),
(8, 'AB-');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `nome_user` varchar(100) NOT NULL,
  `RH` bigint(20) NOT NULL,
  `idade` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `telefone` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `rol` int(11) NOT NULL,
  `id_tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`id_user`, `nome_user`, `RH`, `idade`, `email`, `telefone`, `password`, `rol`, `id_tipo`) VALUES
(1, 'Pables', 1111111111, 28, 'admin@gmail.com', '9911165670', '12345', 1, 1),
(3, 'Pablo Morales', 1234554321, 28, 'pmoralesm9@gmail.com', '9911165670', '12345', 2, 1),
(4, 'David Jorge Miles Morales', 1020304050, 18, 'pmoralesm9@hotmail.com', '9911165670', '12345', 2, 7),
(5, 'David Juan Perez', 9876543210, 18, 'dperez@gmail.com', '9911165670', '12345', 2, 5),
(6, 'Maria Lourdes Jaramillo Camacho', 1750502525, 58, 'Mlourdes@hotmail.com', '9911165670', '12345', 2, 1),
(7, 'Jorge Samuel Rendon Ortega', 1236547890, 65, 'JorgeRendon@hotmail.com', '9911165670', '12345', 2, 5),
(12, 'Samuel David Narvaez Quintero', 1894563217, 45, 'Narvaez@gmail.com', '9911165670', '12345', 2, 3);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_agenda`),
  ADD KEY `fk_me` (`id_me`),
  ADD KEY `fk_user` (`id_user`);

--
-- Índices de tabela `datas`
--
ALTER TABLE `datas`
  ADD PRIMARY KEY (`id_fe`);

--
-- Índices de tabela `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Índices de tabela `medico`
--
ALTER TABLE `medico`
  ADD PRIMARY KEY (`id_medico`);

--
-- Índices de tabela `medico_especialidad`
--
ALTER TABLE `medico_especialidad`
  ADD PRIMARY KEY (`id_me`),
  ADD KEY `fk_medico` (`id_medico`),
  ADD KEY `fk_especialidad` (`id_especialidad`);

--
-- Índices de tabela `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `sangre`
--
ALTER TABLE `sangre`
  ADD PRIMARY KEY (`id_tipo`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `permisos` (`rol`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_agenda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de tabela `datas`
--
ALTER TABLE `datas`
  MODIFY `id_fe` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `medico`
--
ALTER TABLE `medico`
  MODIFY `id_medico` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `medico_especialidad`
--
ALTER TABLE `medico_especialidad`
  MODIFY `id_me` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `sangre`
--
ALTER TABLE `sangre`
  MODIFY `id_tipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `agenda`
--
ALTER TABLE `agenda`
  ADD CONSTRAINT `fk_me` FOREIGN KEY (`id_me`) REFERENCES `medico_especialidad` (`id_me`),
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Restrições para tabelas `medico_especialidad`
--
ALTER TABLE `medico_especialidad`
  ADD CONSTRAINT `fk_especialidad` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id_especialidad`),
  ADD CONSTRAINT `fk_medico` FOREIGN KEY (`id_medico`) REFERENCES `medico` (`id_medico`);

--
-- Restrições para tabelas `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `permisos` FOREIGN KEY (`rol`) REFERENCES `permisos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
