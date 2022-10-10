module.exports = function (sequelize, DataTypes) {
    const SecurityType = sequelize.define("SecurityType", {
        security_type_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        security_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        security_type_description: {
            type: DataTypes.STRING
        }
    });
    SecurityType.associate = function(models) {
        SecurityType.hasMany(models.Offering, {
            foreignKey: 'security_type_id'
        });
    }
    return SecurityType;
}
