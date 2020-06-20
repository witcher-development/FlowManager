import { Model, Sequelize } from 'sequelize'

const sequelize = new Sequelize('mysql://witcher:qwertyA!1@localhost:3306/flowmanager')

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

class User extends Model {}

// User.init({}, {})
