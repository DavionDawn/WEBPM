var log = require('../config/config')["log"];
var _plantsModel = require('./DataObjects/plants');
var Sequelize = require('sequelize');

module.exports = function (sequelize) {
    var Plants = sequelize.define('Plants', _plantsModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getPlantsByName: function (Plantsname, cb) {
                var query = {
                    where: {
                        name: Plantsname
                    }
                };
                Plants.findOne(query).then(cb);
            },

            getAll: function (cb) {
                Plants.findAll().then(cb);
            },
            getNestedPlantsBy: function (query, cb) {
                Plants.findAll(query).then(cb);
            }
            ,
            deletePlantsByID: function (id, cb) {
                Plants.destroy({ where: { plantid: id } }).then(cb);
            },
            addPlants: function (name, description, capacity, cb) {
                Plants.create({
                    name: name,
                    description: description,
                    capacity: capacity,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editPlants: function (plantid, name, description, capacity, cb) {
                Plants.update({
                    name: name,
                    description: description,
                    capacity: capacity
                }, {
                        where: {
                            plantid: plantid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'plants',
        timestamps: false
    });
    return Plants;
};
