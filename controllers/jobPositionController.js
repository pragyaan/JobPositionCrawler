var JobPositionModel = require("../models/jobPositionModel");


function JobPositionController() {
    this.model = new JobPositionModel();
}
JobPositionController.prototype.get = function (req, res) {
    this.model.findAll(req, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else if (data.hits.total <= 0) {
            res.status(404).json({status: 404, msg: "Data not found"});
        }else{
            res.header('X-TOTAL-COUNT', data.hits.total);
            res.status(200).json(data.hits.hits);
        }
    });
};

JobPositionController.prototype.getById = function (req, res) {
    this.model.getById(req.params.id, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else if (!data) {
            res.status(404).json({status: 404, msg: "Record not found"});
        } else {
            res.status(200).json(data);
        }
    });
};

JobPositionController.prototype.create = function (req, res) {
    this.model.create(req.body, function (err, data) {
             if (err) {
                 res.status(500).json(err);
            } else {
                 res.status(201).json(data);
            }
         });
};

JobPositionController.prototype.update = function (req, res) {
    this.model.update(req.params.id, req.body, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else if (!data) {
            res.status(404).json({status: 404, msg: "Record not found"});
        } else {
            res.status(200).json(data);
        }
    });
};

JobPositionController.prototype.remove = function (req, res) {
    this.model.remove(req.params.id, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else if (!data) {
            res.status(404).json({status: 404, msg: "Record not found"});
        } else {
            res.status(204).json(data);
        }
    });
};

module.exports = JobPositionController;