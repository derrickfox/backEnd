const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.get('/list', product_controller.product_get_all);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

const testArr = [1, 2, 3, 4];
testArr.forEach(function(i) {
    console.log('i', i);
})

// // Where 'links' are the endpoints you want enabled/listed.
// links.forEach(function(link) {
//     router.get(link.regex, function(req, res, next) {
//       console.log("trying to open " + link.url);
//       res.render(link.url, { title: link.title, link: link });
//     });
//   });

module.exports = router;