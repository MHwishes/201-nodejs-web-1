const {Router}= require('express');
const CartController = require('../../controller/CartController');


const router = Router();
const cartCtrl = new CartController();

router.get('/', cartCtrl.getAll);
router.get('/:id', cartCtrl.getOne);
router.post('/', cartCtrl.createOne);
router.put('/:id', cartCtrl.updateOne);
router.delete('/:id', cartCtrl.deleteOne);

module.exports = router;