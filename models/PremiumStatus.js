module.exports = function (sequelize, DataTypes) {
    const PremiumStatus = sequelize.define("PremiumStatus", {
        premium_status_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        premium_status_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        premium_status_description: {
            type: DataTypes.STRING,
        },
    })
    PremiumStatus.associate = function(models) {
        PremiumStatus.hasMany(models.Offering, {
            foreignKey: 'premium_status_id'
        });
    }
    return PremiumStatus;
}
