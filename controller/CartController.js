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

    create(req, res, next) {

        Cart.create(req.body, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(201);
        })
    }

    update(req, res, next) {
        Cart.update({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(204);
        })
    }

    delete(req, res, next) {
        Cart.remove({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(204);
        });
    }
}

module.exports = cartController;
