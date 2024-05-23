CREATE TABLE register (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    comment TEXT
);

CREATE TABLE modules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idCode VARCHAR(255) NOT NULL,
    moduleName VARCHAR(255) NOT NULL,
    semester VARCHAR(10) NOT NULL,
    description VARCHAR(255) NOT NULL
);

INSERT INTO `modules` (`id`, `idCode`, `moduleName`, `semester`, `description`) VALUES (NULL, 'Com700', 'Professional Issues $ Practices', '3', 'Learn about the regulations.');
INSERT INTO `modules` (`id`, `idCode`, `moduleName`, `semester`, `description`) VALUES (NULL, 'Com710', 'Web Technologies', '3', 'This module provides learners from non-computing backgrounds with a thorough grounding in web development.');
INSERT INTO `modules` (`id`, `idCode`, `moduleName`, `semester`, `description`) VALUES (NULL, 'Com714', 'Software Design & Development', '3', 'Object-oriented (OO) development is at the heart of most software developed today.');
INSERT INTO `modules` (`id`, `idCode`, `moduleName`, `semester`, `description`) VALUES (NULL, 'Com713', 'Cyber Security Application', '3', 'In this module we present several challenging arguments.');