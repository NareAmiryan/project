module.exports = function (sequelize, DataTypes) {
    const OfferingJoinSector = sequelize.define("OfferingJoinSector", {
        sector_id:{
            type: DataTypes.INTEGER,
        },
        offering_id: {
            type: DataTypes.INTEGER,
        },
    });
    OfferingJoinSector.associate = function(models) {
        OfferingJoinSector.belongsTo(models.Sector, {
            foreignKey: 'sector_id'
        });
    }
    OfferingJoinSector.associate = function(models) {
        OfferingJoinSector.belongsTo(models.Offering, {
            foreignKey: 'offering_id'
        });
    }
    return OfferingJoinSector;
}
