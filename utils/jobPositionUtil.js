var elasticsearch = require('elasticsearch'),
    ESQ = require('esq'),
    esq = new ESQ();

function JPUtil(url) {
    this.client = new elasticsearch.Client({
        host: url,
        log: 'debug'
    });
}
JPUtil.prototype.findAll = function (indexName, type, callback) {
    this.client.search({
        index: indexName,
        type: type
    }, function (err, response) {
        callback(err, response);
    });
};
JPUtil.prototype.isDocumentExist = function (indexName, type, id, callback) {
    this.client.exists({
        index: indexName,
        type: type,
        id: id
    },function (err, data) {
        callback(err, data);
    });
};
JPUtil.prototype.addDocument = function (indexName, type, data, callback) {
    this.client.index({
        index: indexName,
        type: type,
        body: data
    }, function (err, data) {
        callback(err, data);
    });
};
JPUtil.prototype.updateDocument = function (indexName, type, id, body, callback) {
    this.client.update({
        index: indexName,
        type: type,
        id: id,
        body: {
            doc: body
        }
    }, function (err, data) {
        callback(err, data);
    });
};

JPUtil.prototype.deleteDocument = function (indexName, type, id, callback) {
    this.client.delete({
        index: indexName,
        type:  type,
        id: id
    }, function (err, data) {
        callback(err, data);
    });
};
JPUtil.prototype.displayDocument = function (indexName, type, id, callback) {
    this.client.get({
        index: indexName,
        type: type,
        id: id
    }, function (err, data) {
        callback(err, data);
    });
};

module.exports = JPUtil;