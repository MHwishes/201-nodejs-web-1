const {Router}= require('express');
const CategoryController = require('../../controller/CategoryController');


const router = Router();
const categoryCtrl = new CategoryController();

router.get('/', categoryCtrl.getAll);
router.get('/:id', categoryCtrl.getOne);
router.post('/', categoryCtrl.create);
router.put('/:id', categoryCtrl.update);
router.delete('/:id', categoryCtrl.delete);

module.exports = router;