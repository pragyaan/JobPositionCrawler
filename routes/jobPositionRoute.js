var express = require("express"),
    JobPositionController = require("../controllers/jobPositionController.js"),
    jpc = new JobPositionController,
    router = express.Router();

router.get('/',jpc.get.bind(jpc));
router.post('/',jpc.create.bind(jpc));
router.get('/:id',jpc.getById.bind(jpc));
router.put('/:id',jpc.update.bind(jpc));
router.delete('/:id',jpc.remove.bind(jpc));

module.exports = router;