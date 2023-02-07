class APIFeatures {
  constructor(query, queryString){
    this.query = query;
    this.queryString = queryString
  }

  filter() {
    // 1) Filterin
    const queryObj = {...this.queryString};
    const excludedFields = ['page', 'order', 'limit', 'fields', 'offset', 'attributes', 'userId'];
    excludedFields.forEach(el => delete queryObj[el]);
    
    // 2) Advanced Filtering
    // Replace eq, ne, is, not, gt, gte, lt, lte sent via querystring
    // with operator aliases which we passed as options to the sequelize constructor
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(eq|ne|is|not|gt|gte|lt|lte)\b/g, match => `$${match}`);
    this.query.where = JSON.parse(queryStr);
    return this;
  }

  sort() {
    if(this.queryString.order) {
      let orderBy = this.queryString.order.split(',');

      orderBy = orderBy.map((el) => {
        if(el.startsWith('-')) {
          return [el.substring(1, el.length), 'DESC'];
        } 
        else
        {
          return [el, 'ASC']
        }
      });

      this.query.order = orderBy;
    } else {
      this.query.order = [['id', 'ASC']];
    }
    return this;
  }

  limitFields() {
    if(this.queryString.attributes) {
      this.query.attributes = this.queryString.attributes.split(',');
      
      // Remove password field
      for( var i = 0; i < this.query.attributes.length; i++){ 
        if ( this.query.attributes[i] === 'password') { 
          this.query.attributes.splice(i, 1); 
        }
      }
    } else {
      this.query.attributes = { exclude: ['password', 'createdBy', 'updatedBy', 'createdAt', 'updatedAt']};
    }
    return this;
  }

  paginate () {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const offset = (page - 1 ) * limit;
    this.query.offset = offset;
    this.query.limit = limit;

    return this;
  }
};

module.exports = APIFeatures;