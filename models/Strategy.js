module.exports = function (sequelize, DataTypes) {
    const Strategy = sequelize.define("Strategy", {
        strategy_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        strategy_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        strategy_description: {
            type: DataTypes.STRING,
        }
    });
    Strategy.associate = function(models) {
        Strategy.hasMany(models.OfferingJoinStrategy, {
            foreignKey: 'strategy_id'
        });
    }
    return Strategy;
}
