CREATE DATABASE MedellinTimes;
USE MedellinTimes;

CREATE TABLE noticias(
    id int(255) auto_increment not null,
    titulo varchar(50),
    body text,
    imagen varchar (255),
    CONSTRAINT pk_noticias PRIMARY KEY(id)
);

CREATE TABLE publicidad(
    id int(255) auto_increment not null,
    titulo varchar(50),
    imagen varchar (255),
    CONSTRAINT pk_publicidad PRIMARY KEY(id)
);

CREATE TABLE eventos(
    id int(255) auto_increment not null,
    titulo varchar(50),
    descripcion text,
    CONSTRAINT pk_eventos PRIMARY KEY(id)
);

