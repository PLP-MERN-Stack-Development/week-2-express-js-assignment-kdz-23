
const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controllers');
const validateProduct = require('../middleware/validate.middleware');

router.get('/', controller.getAllProducts);
router.get('/search', controller.searchProducts);
router.get('/stats', controller.getProductStats);
router.get('/:id', controller.getProductById);
router.post('/', validateProduct, controller.createProduct);
router.put('/:id', validateProduct, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
