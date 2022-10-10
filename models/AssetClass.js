module.exports = function (sequelize, DataTypes) {
    const AssetClass = sequelize.define("AssetClass", {
        asset_class_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        asset_class_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        asset_class_description: {
            type: DataTypes.STRING
        }
    })
    AssetClass.associate = function(models) {
        AssetClass.hasMany(models.Offering, {
            foreignKey: 'asset_class_id'
        });
    }
    return AssetClass;
}

