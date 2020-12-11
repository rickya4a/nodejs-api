module.exports = {
  "up": `CREATE TABLE employees (
            id INT NOT NULL AUTO_INCREMENT,
            PRIMARY KEY id (id),
            name VARCHAR(50),
            phone_number VARCHAR(16),
            jobtitle VARCHAR(25)
          )`,
  "down": "DROP TABLE employees"
}