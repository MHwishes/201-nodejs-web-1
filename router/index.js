const items = require('./routers/items');
const category = require('./routers/category');
const cart = require('./routers/cart');

module.exports = (app)=> {
    app.use('/item', items);
    app.use('/category', category);
    app.use('/cart', cart);
};
