module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
        "user", // Model name
        {
            // Attributes
            userId: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            userTypeId: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            userPassword: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            lastLoginDate: {
                type: DataTypes.DATE
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            createdDate: {
                type: DataTypes.DATE
            },
            lastModifiedDate: {
                type: DataTypes.DATE
            }
        },
        {
            // Options
            timestamps: false,
            underscrored: false,
            createdAt: false,
            updatedAt: false
        }
    );

    return User;
};
