import * as dotenv from 'dotenv';
import { SequelizeFactory } from 'src/infra/factory/sequelizeFactory';

dotenv.config();

export const sequelize = SequelizeFactory.createSequelizeClient(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,
    process.env.DB_HOST);

export function sequelizeAuthentication() {
    sequelize.authenticate()
        .then(() => {
            console.log('Connection has been established successfully');
        })
        .catch(err => {
            console.error('Unnable to connect to the database', err);
        })
}   