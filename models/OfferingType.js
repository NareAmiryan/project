module.exports = function (sequelize, DataTypes) {
    const OfferingType = sequelize.define("OfferingType", {
        offering_type_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        offering_type_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        offering_type_description: {
            type: DataTypes.STRING
        }
    })
    OfferingType.associate = function(models) {
        OfferingType.hasMany(models.Offering, {
            foreignKey: 'offering_type_id'
        });
    }
    return OfferingType;
}
