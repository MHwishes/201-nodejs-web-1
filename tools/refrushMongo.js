const Item = require('../model/item');
const Category = require('../model/category');
const Cart = require('../model/cart');
// const mongoose = require('mongoose');

const modelsMap = {Item, Category, Cart};

const rawDate = require('./rawData');
// mongoose.connect('mongodb://localhost/supermarket1');
var docs = Object.keys(rawDate);

module.exports = ()=> {

    Object.keys(rawDate).forEach(v=> {
        modelsMap[v].remove(()=> {
            modelsMap[v].create(rawDate[v], ()=> {
                docs = docs.filter(doc=>doc !== v);
                if (docs.length === 0) {
                    // process.exit(0);
                }
            })
        })
    });
};
