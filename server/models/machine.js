var _machinesModel = require("./DataObjects/machines");
module.exports = function (sequelize) {
    var Machines = sequelize.define('Machines', _machinesModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getMachinesByName: function (machinesname, cb) {
                var query = {
                    where: {
                        name: machinesname
                    }
                };
                Machines.findOne(query).then(cb);
            },
            getMachinesById: function (machineid, cb) {
                var query = {
                    where: {
                        machineid: machineid
                    }
                };
                Machines.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Machines.findAll().then(cb);
            },
            deleteMachinesByID: function (machineid, cb) {
                Machines.destroy({ where: { machineid: machineid } }).then(cb);
            },
            addMachines: function (name, vendor, description, drawing, lineid, cb) {
                Machines.create({
                    name: name,
                    vendor: vendor,
                    description: description,
                    drawing: drawing,
                    lineid: lineid,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editMachines: function (machineid, name, vendor, description, drawing, lineid, cb) {
                Machines.update({
                    name: name,
                    vendor: vendor,
                    description: description,
                    drawing: drawing,
                    lineid: lineid
                }, {
                        where: {
                            machineid: machineid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'machines',
        timestamps: false
    });
    return Machines;
};
