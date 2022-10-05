module.exports = function (sequelize, DataTypes) {
    const offering = sequelize.define("offering", {
        unique_id:{
            type:DataTypes.UUID,
            allowNull:false
        },
        offering_id: {
            type: DataTypes.INT,
            allowNull: false,
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
            type: DataTypes.INT,
        },
        structure_id:{
            type: DataTypes.INT,
        },
        offering_type_id:{
            type: DataTypes.INT,
        },
        security_type_id:{
            type: DataTypes.INT,
        },
        fundraising_type_id:{
            type: DataTypes.INT,
        },
        asset_class_id:{
            type: DataTypes.INT,
        },
        investor_requirement_id:{
            type: DataTypes.INT,
        },
        portfolio_type_id:{
            type: DataTypes.INT,
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
            type: DataTypes.INT,
        },
        offering_size :{
            type: DataTypes.INT,
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
            type: DataTypes.INT,
        },
        is_real :{
            type: DataTypes.BOOLEAN,
        },
    })
    return offering
};
