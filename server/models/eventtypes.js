var _eventtypesModel = require("./DataObjects/eventtypes");
module.exports = function (sequelize) {
    var Eventtypes = sequelize.define('Eventtypes', _eventtypesModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getEventtypesByName: function (eventtypesname, cb) {
                var query = {
                    where: {
                        name: eventtypesname
                    }
                };
                Eventtypes.findOne(query).then(cb);
            },
            getEventtypesById: function (eventtypeid, cb) {
                var query = {
                    where: {
                        eventtypeid: eventtypeid
                    }
                };
                Eventtypes.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Eventtypes.findAll().then(cb);
            },
            deleteEventtypesByID: function (eventtypeid, cb) {
                Eventtypes.destroy({ where: { eventtypeid: eventtypeid } }).then(cb);
            },
            addEventtypes: function (name, description, cb) {
                Eventtypes.create({
                    name: name,
                    description: description,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editEventtypes: function (eventtypeid, name, description, cb) {
                Eventtypes.update({
                    name: name,
                    description: description
                }, {
                        where: {
                            eventtypeid: eventtypeid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'eventtypes',
        timestamps: false
    });
    return Eventtypes;
};
