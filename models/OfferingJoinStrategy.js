module.exports = function (sequelize, DataTypes) {
    const OfferingJoinStrategy = sequelize.define("OfferingJoinStrategy", {
        strategy_id:{
            type: DataTypes.INTEGER,
        },
        offering_id: {
            type: DataTypes.INTEGER,
        }
    });
    OfferingJoinStrategy.associate = function(models) {
        OfferingJoinStrategy.belongsTo(models.Strategy, {
            foreignKey: 'strategy_id'
        });
    }
    OfferingJoinStrategy.associate = function(models) {
        OfferingJoinStrategy.belongsTo(models.Offering, {
            foreignKey: 'offering_id'
        });
    }
    return OfferingJoinStrategy;
}
