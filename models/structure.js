module.exports = function (sequelize, DataTypes) {
    const Structure = sequelize.define("Structure", {
        structure_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        structure_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        structure_description: {
            type: DataTypes.STRING
        }
    })
    Structure.associate = function(models) {
        Structure.hasMany(models.Offering, {
            foreignKey: 'structure_id'
        });
    }
    return Structure;
}
