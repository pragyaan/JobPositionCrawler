var _ = require('lodash'),
    config = require('../config/config.json'),
    JPUtil = require('../utils/jobPositionUtil');




function JobPositionModel() {
    jpUtil = new JPUtil(config.es.url);
}

JobPositionModel.prototype.findAll = function (undefined, callback) {
    esUtil.findAll(config.es.indexName, config.es.type, function (err, result) {
        callback(err, result);
    });
};

JobPositionModel.prototype.getById = function (id, callback) {
    esUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            esUtil.displayDocument(config.es.indexName, config.es.type, id, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};

JobPositionModel.prototype.create = function (value, callback) {
    esUtil.addDocument(config.es.indexName, config.es.type, value, function (err, bindingData) {
        callback(err, bindingData);
    });
};

JobPositionModel.prototype.update = function (id, data, callback) {
    esUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            esUtil.updateDocument(config.es.indexName, config.es.type, id, data, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};
JobPositionModel.prototype.remove = function (id, callback) {
    esUtil.isDocumentExist(config.es.indexName, config.es.type, id, function (err, exist) {
        if (exist) {
            esUtil.deleteDocument(config.es.indexName, config.es.type, id, function (err, display) {
                callback(err, display);
            });
        } else {
            callback(err, null);
        }
    });
};

module.exports = JobPositionModel;
