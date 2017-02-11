const {Router}= require('express');
const ItemController = require('../../controller/ItemController');


const router = Router();
const itemCtrl = new ItemController();

router.get('/', itemCtrl.getAll);
router.get('/:id', itemCtrl.getOne);
router.post('/', itemCtrl.createOne);
router.put('/:id', itemCtrl.updateOne);
router.delete('/:id', itemCtrl.deleteOne);

module.exports = router;