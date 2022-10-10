module.exports = function (sequelize, DataTypes) {
    const OfferingJoinState = sequelize.define("OfferingJoinState", {
        state_id:{
            type: DataTypes.INTEGER,
        },
        offering_id: {
            type: DataTypes.INTEGER,
        },
    })
    OfferingJoinState.associate = function(models) {
        OfferingJoinState.belongsTo(models.State, {
            foreignKey: 'state_id'
        });
    }
    OfferingJoinState.associate = function(models) {
        OfferingJoinState.belongsTo(models.Offering, {
            foreignKey: 'offering_id'
        });
    }
    return OfferingJoinState;
}
