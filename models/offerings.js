module.exports = function (sequelize, DataTypes) {
    const Offering = sequelize.define("Offering", {
        unique_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        offering_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        offering_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        offering_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        offering_webpage:{
            type: DataTypes.STRING,
        },
        old_url:{
            type: DataTypes.STRING,
        },
        sponsor_id:{
            type: DataTypes.INTEGER,
        },
        structure_id:{
            type: DataTypes.INTEGER,
        },
        offering_type_id:{
            type: DataTypes.INTEGER,
        },
        security_type_id:{
            type: DataTypes.INTEGER,
        },
        fundraising_type_id:{
            type: DataTypes.INTEGER,
        },
        asset_class_id:{
            type: DataTypes.INTEGER,
        },
        investor_requirement_id:{
            type:DataTypes.INTEGER,
        },
        portfolio_type_id:{
            type:DataTypes.INTEGER,
        },
        target_irr :{
            type: DataTypes.STRING,
        },
        target_cash_on_cash:{
            type: DataTypes.STRING,
        },
        target_return_on_cost :{
            type: DataTypes.STRING,
        },
        target_equity_multiple :{
            type: DataTypes.STRING,
        },
        minimum_investment :{
            type: DataTypes.INTEGER,
        },
        offering_size :{
            type: DataTypes.INTEGER,
        },
        offering_fees :{
            type: DataTypes.STRING,
        },
        estimated_hold_period :{
            type: DataTypes.STRING,
        },
        estimated_first_distribution :{
            type: DataTypes.STRING,
        },
        offering_deck:{
            type: DataTypes.STRING,
        },
        offering_video :{
            type: DataTypes.STRING,
        },
        offering_profile_image:{
            type: DataTypes.STRING,
        },
        offering_image_1 :{
            type: DataTypes.STRING,
        },
        offering_image_2:{
            type: DataTypes.STRING,
        },
        offering_image_3 :{
            type: DataTypes.STRING,
        },
        offering_image_4 :{
            type: DataTypes.STRING,
        },
        offering_image_5:{
            type: DataTypes.STRING,
        },
        premium_status_id :{
            type: DataTypes.INTEGER,
        },
        is_real :{
            type: DataTypes.BOOLEAN,
        },
    });
    Offering.associate = function(models) {
        Offering.hasMany(models.OfferingJoinState, {
            foreignKey: 'offering_id'
        });
    };
    Offering.associate = function(models) {
        Offering.hasMany(models.OfferingJoinSector, {
            foreignKey: 'offering_id'
        });
    };
    Offering.associate = function(models) {
        Offering.hasMany(models.OfferingJoinStrategy, {
            foreignKey: 'offering_id'
        });
    };

    Offering.associate = function(models) {
        Offering.belongsTo(models.Structure, {
            foreignKey: 'structure_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.SecurityType, {
            foreignKey: 'security_type_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.AssetClass, {
            foreignKey: 'asset_class_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.PortfolioType, {
            foreignKey: 'portfolio_type_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.PremiumStatus, {
            foreignKey: 'premium_status_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.InvestorRequirement, {
            foreignKey: 'investor_requirement_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.FundraisingStatus, {
            foreignKey: 'fundraising_status_id'
        });
    }
    Offering.associate = function(models) {
        Offering.belongsTo(models.OfferingType, {
            foreignKey: 'offering_type_id'
        });
    };
    Offering.associate = function(models) {
        Offering.belongsTo(models.Sponsor, {
            foreignKey: 'sponsor_id'
        });
    };
    return Offering
};
