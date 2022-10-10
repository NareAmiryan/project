module.exports = function (sequelize, DataTypes) {
    const InvestorRequirement = sequelize.define("InvestorRequirement", {
        investor_requirement_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        investor_requirement_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        investor_requirement_description: {
            type: DataTypes.STRING,
        },
    })
    InvestorRequirement.associate = function(models) {
        InvestorRequirement.hasMany(models.Offering, {
            foreignKey: 'investor_requirement_id'
        });
    }
    return InvestorRequirement;
}
