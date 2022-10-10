module.exports = function (sequelize, DataTypes) {
    const SponsorJoinBroker = sequelize.define("SponsorJoinBroker", {
        sponsor_id:{
            type: DataTypes.INTEGER,
        },
        broker_id: {
            type: DataTypes.INTEGER,
        }
    })
    SponsorJoinBroker.associate = function(models) {
        SponsorJoinBroker.belongsTo(models.BrokerDealer, {
            foreignKey: 'broker_id'
        });
    }
    SponsorJoinBroker.associate = function(models) {
        SponsorJoinBroker.belongsTo(models.Sponsor, {
            foreignKey: 'sponsor_id'
        });
    }

    return SponsorJoinBroker;
}
