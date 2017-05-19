/**
 * Created by Dinesh Reddy Maddula on 5/18/2017.
 */
var express = require("express"),
    JobPositionController = require("../controllers/jobPositionController.js");
var jpc = new JobPositionController;
var router = express.Router();

router.get('/',jpc.get.bind());
router.post('/',jpc.create.bind());
router.get('/:id',jpc.getById.bind());
router.put('/:id',jpc.update.bind());
router.delete('/:id',jpc.remove.bind());

module.exports = router;