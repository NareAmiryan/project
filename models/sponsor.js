module.exports = function (sequelize, DataTypes) {
    const Sponsor = sequelize.define("Sponsor", {
        sponsor_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        sponsor_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        sponsor_description: {
            type: DataTypes.STRING
        },
        sponsor_logo : {
            type: DataTypes.STRING
        },
        sponsor_contact_name: {
            type: DataTypes.STRING
        },
        sponsor_contact_title : {
            type: DataTypes.STRING
        },
        sponsor_contact_street : {
            type: DataTypes.STRING
        },
        sponsor_contact_city: {
            type: DataTypes.STRING
        },
        sponsor_contact_state : {
            type: DataTypes.STRING
        },
        sponsor_contact_zip : {
            type: DataTypes.STRING
        },
        sponsor_contact_phone: {
            type: DataTypes.STRING
        },
        sponsor_contact_email : {
            type: DataTypes.STRING
        },
        sponsor_video: {
            type: DataTypes.STRING
        },
        sponsor_leadership_1_name : {
            type: DataTypes.STRING
        },
        sponsor_leadership_1_title : {
            type: DataTypes.STRING
        },
        sponsor_leadership_1_image : {
            type: DataTypes.STRING
        },
        sponsor_leadership_1_linkedin: {
            type: DataTypes.STRING
        },
        sponsor_leadership_2_name: {
            type: DataTypes.STRING
        },
        sponsor_leadership_2_title : {
            type: DataTypes.STRING
        },
        sponsor_leadership_2_image : {
            type: DataTypes.STRING
        },
        sponsor_leadership_2_linkedin : {
            type: DataTypes.STRING
        },
    });
    Sponsor.associate = function(models) {
        Sponsor.hasMany(models.SponsorJoinBroker, {
            foreignKey: 'sponsor_id'
        });
    }
    Sponsor.associate = function(models) {
        Sponsor.hasMany(models.Offering, {
            foreignKey: 'sponsor_id'
        });
    }
    return Sponsor;
}
