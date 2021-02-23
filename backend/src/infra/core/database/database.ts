import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';

dotenv.config();

export const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

export function sequelizeAuthentication() {
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully');
        })
        .catch(err => {
            console.error('Unnable to connect to the database', err);
        })
}   