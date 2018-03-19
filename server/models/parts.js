var _partsModel = require("./DataObjects/parts");
module.exports = function (sequelize) {
    var Parts = sequelize.define('Parts', _partsModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getPartsByName: function (partsname, cb) {
                var query = {
                    where: {
                        name: partsname
                    }
                };
                Parts.findOne(query).then(cb);
            },
            getPartsById: function (partid, cb) {
                var query = {
                    where: {
                        partid: partid
                    }
                };
                Parts.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Parts.findAll().then(cb);
            },
            deletePartsByID: function (partid, cb) {
                Parts.destroy({ where: { partid: partid } }).then(cb);
            },
            addParts: function (name, image, vendor, stratification, partnumber, sparelocation, pmstrategy, pmfrequency, smp, groupid, cb) {
                Parts.create({
                    name: name,
                    image: image,
                    vendor: vendor,
                    stratification: stratification,
                    partnumber: partnumber,
                    sparelocation: sparelocation,
                    pmstrategy: pmstrategy,
                    pmfrequency: pmfrequency,
                    smp: smp,
                    groupid: groupid,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editParts: function (partid, name, image, vendor, stratification, partnumber, sparelocation, pmstrategy, pmfrequency, smp, groupid, cb) {
                Parts.update({
                    name: name,
                    image: image,
                    vendor: vendor,
                    stratification: stratification,
                    partnumber: partnumber,
                    sparelocation: sparelocation,
                    pmstrategy: pmstrategy,
                    pmfrequency: pmfrequency,
                    smp: smp,
                    groupid: groupid
                }, {
                        where: {
                            partid: partid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'parts',
        timestamps: false
    });
    return Parts;
};
