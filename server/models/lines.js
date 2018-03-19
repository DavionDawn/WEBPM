var _linesModel = require('./DataObjects/lines');
var log = require('../config/config')["log"];
var models = require("./index");

module.exports = function (sequelize) {
    var Lines = sequelize.define('Lines', _linesModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getLinesByID: function (lineid, cb) {
                var query = {
                    where: {

                        lineid: lineid
                    }
                };
                Lines.findOne(query).then(cb);
            },

            getLinesByName: function (name, cb) {
                var query = {
                    where: {

                        name: name
                    }
                };
                Lines.findOne(query).then(cb);
            },

            getAll: function (cb) {
                Lines.findAll().then(cb);
            },
            deleteLinesByID: function (lineid, cb) {
                Lines.destroy({ where: { lineid: lineid } }).then(cb);
            },
            deleteLinesByPlantID: function (plantid, cb) {
                Lines.destroy({ where: { plantid: plantid } }).then(cb);
            },
            addLines: function (name, description, plantid, cb) {
                Lines.create({
                    name: name,
                    description: description,
                    plantid: plantid,
                    imgLink: '/img/courses/training-icon-1.svg'
                }).then(cb);
            },
            editLines: function (lineInfo, cb) {
                Lines.update({
                    name: lineInfo.name,
                    description: lineInfo.description,
                },
                    {
                        where: {
                            lineid: lineInfo.lineid
                        }
                    }).then(cb)
            }
        },
        tableName: 'lines',
        timestamps: false
    });
    return Lines;
};
