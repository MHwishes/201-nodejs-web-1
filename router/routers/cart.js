const {Router}= require('express');
const CartController = require('../../controller/CartController');


const router = Router();
const cartCtrl = new CartController();

router.get('/', cartCtrl.getAll);
router.get('/:id', cartCtrl.getOne);
router.post('/', cartCtrl.create);
router.put('/:id', cartCtrl.update);
router.delete('/:id', cartCtrl.delete);

module.exports = router;