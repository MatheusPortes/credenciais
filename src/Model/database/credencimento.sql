-- Definição da base de dados credencimaneto digital
CREATE DATABASE IF NOT EXISTS credenciamento DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- setando o banco 
USE credenciamento;

-- As linhas abaixo criam a primeira tabela

CREATE TABLE IF NOT EXISTS colaborador (
    ID BIGINT(20) UNSIGNED AUTO_INCREMENT NOT NULL,
    IMAGEM VARCHAR(255) NOT NULL UNIQUE,
    QRCODE VARCHAR(255) NOT NULL UNIQUE,
    PRIMARY KEY (ID)
);

