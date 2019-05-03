const express = require('express');
const router = express.Router();

const source_controller = require('../controllers/source.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', source_controller.test);
router.get('/list', source_controller.source_get_all);
router.post('/create', source_controller.source_create);
router.get('/:id', source_controller.source_details);
router.put('/:id/update', source_controller.source_update);
router.delete('/:id/delete', source_controller.source_delete);

module.exports = router;