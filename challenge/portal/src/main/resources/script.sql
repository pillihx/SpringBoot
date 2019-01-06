CREATE TABLE usuario (id bigint not null auto_increment, age integer, first_name varchar(255), last_name varchar(255), password varchar(255), salary bigint, username varchar(255), primary key (id));
CREATE TABLE carro (id bigint not null auto_increment, marca varchar(255), modelo varchar(255), color varchar(255), primary key (id));
INSERT INTO usuario (age, first_name, last_name,password,salary,username) VALUES (23, 'admin', 'admin','$2a$04$EZzbSqieYfe/nFWfBWt2KeCdyq0UuDEM1ycFF8HzmlVR6sbsOnw7u',12345,'admin');
