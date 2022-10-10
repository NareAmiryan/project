module.exports = function (sequelize, DataTypes) {
    const State = sequelize.define("State", {
        state_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        state_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        state_abbreviation: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
    })
    State.associate = function(models) {
        State.hasMany(models.OfferingJoinState, {
            foreignKey: 'state_id'
        });
    }
    return State;
}
