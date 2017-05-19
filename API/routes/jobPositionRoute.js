/**
 * Created by Dinesh Reddy Maddula on 5/18/2017.
 */
var express = require("express"),
    Controller = require("../API/controllers/jobPositionController.js");
var jpc = new Controller;
var router = express.Router();

router.get('/',jpc.get.bind());
router.post('/',jpc.post.bind());
router.get('/:id',jpc.getId.bind());
router.put('/:id',jpc.put.bind());
router.delete('/:id',jpc.delete.bind());

module.exports = router;