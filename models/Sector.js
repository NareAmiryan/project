module.exports = function (sequelize, DataTypes) {
    const Sector = sequelize.define("Sector", {
        sector_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        sector_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        sector_description: {
            type: DataTypes.STRING,
        },
        sector_active:{
            type:DataTypes.BOOLEAN,
        }
    })
    Sector.associate = function(models) {
        Sector.hasMany(models.OfferingJoinSector, {
            foreignKey: 'sector_id'
        });
    }
    return Sector;
}
