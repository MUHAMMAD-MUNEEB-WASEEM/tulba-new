const db = require('../models');

exports.getOptions = (Model, req) => {
  
  let options = {};
  options.user = req.user;

  switch(Model.name) {
    case 'weddingEvent':
      options.weddingId = req.params.weddingId;
      break;
    default:
      break;
  }
  // if(Model.name === 'category'){
  //   options.include = [{ association: db.categories.items, include: [{ association: db.items.stockLedger }] }, { association: db.categories.department }];
  // }

  return options;
}