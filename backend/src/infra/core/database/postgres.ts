import { SequelizeFactory } from "src/infra/factory/sequelizeFactory";

const dbConfig = require('./database');
const sequelize = SequelizeFactory.connectPostgresClient(dbConfig);

export class PostgresConnection {

    static sequelizeAuthentication() {
        sequelize.authenticate().then(() => {
            console.log('The database connection has been established successfully')
        })
            .catch(err => {
                console.error('Unnable to connect to the database', err);
            })
    }

}

