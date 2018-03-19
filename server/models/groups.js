var _groupsModel = require("./DataObjects/groups");
module.exports = function (sequelize) {
    var Groups = sequelize.define('Groups', _groupsModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getGroupsByName: function (groupsname, cb) {
                var query = {
                    where: {
                        name: groupsname
                    }
                };
                Groups.findOne(query).then(cb);
            },
            getGroupsById: function (groupid, cb) {
                var query = {
                    where: {
                        groupid: groupid
                    }
                };
                Groups.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Groups.findAll().then(cb);
            },
            deleteGroupsByID: function (groupid, cb) {
                Groups.destroy({ where: { groupid: groupid } }).then(cb);
            },
            addGroups: function (name, description, machineid, cb) {
                Groups.create({
                    name: name,
                    description: description,
                    machineid: machineid,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editGroups: function (groupid, name, description, machineid, cb) {
                Groups.update({
                    name: name,
                    description: description,
                    machineid: machineid
                }, {
                        where: {
                            groupid: groupid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'groups',
        timestamps: false
    });
    return Groups;
};
