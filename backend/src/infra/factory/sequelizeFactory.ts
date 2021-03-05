import { Sequelize } from "sequelize-typescript";
export class SequelizeFactory {
    static connectPostgresClient(connetionData: any): Sequelize {
        return new Sequelize(connetionData);
    }
}