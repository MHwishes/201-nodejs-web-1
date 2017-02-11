const Cart = require('../model/cart');

class cartController {
    getAll(req, res, next) {
        Cart.find(function (e, items) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(items);
        });
    }

    getOne(req, res, next) {
        Cart.findOne({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(item);
        })
    }

    createOne(req, res, next) {

        Cart.create(req.body, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(201);
        })
    }

    updateOne(req, res, next) {
        Cart.update({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(204).end();
        })
    }

    deleteOne(req, res, next) {
        Cart.remove({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(204).end();
        });
    }
}

module.exports = cartController;