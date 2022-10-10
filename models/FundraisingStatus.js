module.exports = function (sequelize, DataTypes) {
    const FundraisingStatus = sequelize.define("FundraisingStatus", {
        fundraising_status_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        fundraising_status_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        fundraising_status_description: {
            type: DataTypes.STRING
        }
    })
    FundraisingStatus.associate = function(models) {
        FundraisingStatus.hasMany(models.Offering, {
            foreignKey: 'fundraising_status_id'
        });
    }
    return FundraisingStatus;
}
