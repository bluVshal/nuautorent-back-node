module.exports = (sequelize, Sequelize, DataTypes) => {
    const UserTypes = sequelize.define(
        "user", // Model name
        {
            // Attributes
            userTypeId: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            userTypeName: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
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

    return UserTypes;
};
