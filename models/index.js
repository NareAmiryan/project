'use strict';
const pg = require('pg')
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configJson = require('../config/config.json')[env];
const config = { ...configJson,   dialectModule: pg }
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


let modules = [
  require('./offerings'),
  require('./sponsor'),
  require('./InvestorRequirement'),
  require('./State'),
  require('./PortfolioType'),
  require('./AssetClass'),
  require('./BrokerDealer'),
  require('./FundraisingStatus'),
  require('./OfferingJoinSector'),
  require('./OfferingJoinState'),
  require('./OfferingJoinStrategy'),
  require('./OfferingType'),
  require('./PremiumStatus'),
  require('./Sector'),
  require('./SponsorJoinBroker'),
  require('./Strategy'),
  require('./SecurityType'),
  require('./structure')
];

// Initialize models
modules.forEach((module) => {
  const model = module(sequelize, Sequelize);
  console.log(model);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export {db};
