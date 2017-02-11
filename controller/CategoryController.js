const Category = require('../model/category');

class categoryController {
    getAll(req, res, next) {
        Category.find(function (e, items) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(items);
        });
    }

    getOne(req, res, next) {
        Category.findOne({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(200).send(item);
        })
    }

    createOne(req, res, next) {

        Category.create(req.body, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.sendStatus(201);
        })
    }

    updateOne(req, res, next) {
        Category.update({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(204).end();
        })
    }

    deleteOne(req, res, next) {
        Category.remove({_id: req.params.id}, function (e, item) {
            if (e) {
                res.sendStatus(400);
            }
            res.status(204).end();
        });
    }
}

module.exports = categoryController;
