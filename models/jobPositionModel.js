var config = require('../config/config.json'),
    JPUtil = require('../utils/jobPositionUtil');

function JobPositionModel() {
    jpUtil = new JPUtil(config.es.url);
}

JobPositionModel.prototype.findAll = function (req, callback) {
    jpUtil.findAll(config.es.indexName, config.es.type, function (err, result) {
        callback(err, result);
    });
};

JobPositionModel.prototype.getById = function (id, callback) {
    jpUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            jpUtil.displayDocument(config.es.indexName, config.es.type, id, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};

JobPositionModel.prototype.create = function (data, callback) {
    jpUtil.addDocument(config.es.indexName, config.es.type, data, function (err, bindingData) {
        callback(err, bindingData);
    });
};

JobPositionModel.prototype.update = function (id, data, callback) {
    jpUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            jpUtil.updateDocument(config.es.indexName, config.es.type, id, data, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};
JobPositionModel.prototype.remove = function (id, callback) {
    jpUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            jpUtil.deleteDocument(config.es.indexName, config.es.type, id, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};

module.exports = JobPositionModel;
