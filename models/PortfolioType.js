module.exports = function (sequelize, DataTypes) {
    const PortfolioType = sequelize.define("PortfolioType", {
        portfolio_type_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        portfolio_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        portfolio_type_description: {
            type: DataTypes.STRING,
        },
    })
    PortfolioType.associate = function(models) {
        PortfolioType.hasMany(models.Offering, {
            foreignKey: 'portfolio_type_id'
        });
    }
    return PortfolioType;
}
