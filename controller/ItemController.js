const Item = require('../model/item');

class ItemController {
    getAll(req, res, next) {
        Item.find(function (e, items) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(items);
        });
    }

    getOne(req, res, next) {
        Item.findOne({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(item);
        })
    }

    create(req, res, next) {

        Item.create(req.body, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(201);
        })
    }

    update(req, res, next) {
        Item.update({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(204);
        })
    }

    delete(req, res, next) {
        Item.remove({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(204);
        });
    }
}

module.exports = ItemController;
