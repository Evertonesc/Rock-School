const { DataTypes, Model } = require('sequelize');

export class Student extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                allowNull: false
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            birthDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            courses: {
                type: DataTypes.ARRAY(DataTypes.INTEGER)
            }
        }, {
            sequelize
        })
    }
}