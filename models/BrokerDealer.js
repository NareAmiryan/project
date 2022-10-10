module.exports = function (sequelize, DataTypes) {
    const BrokerDealer = sequelize.define("BrokerDealer", {
        broker_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        broker_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        broker_description: {
            type: DataTypes.STRING
        }
    });
    BrokerDealer.associate = function(models) {
        BrokerDealer.hasMany(models.SponsorJoinBroker, {
            foreignKey: 'broker_id'
        });
    }
    return BrokerDealer;
}
