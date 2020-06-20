"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mysql://witcher:0897654321@localhost:3306/flowmanager');
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
class User extends sequelize_1.Model {
}
// User.init({}, {})
//# sourceMappingURL=index.js.map