import { Sequelize } from "sequelize-typescript";

export class SequelizeFactory {
    static createSequelizeClient(database: string, dbUser: string, dbPassword: string, dbHost: string): Sequelize {
        return new Sequelize(database, dbUser, dbPassword, {
            host: dbHost,
            dialect: 'postgres'
        });
    }
}