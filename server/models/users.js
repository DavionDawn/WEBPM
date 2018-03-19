var _usersModel = require("./DataObjects/users");
module.exports = function (sequelize) {
    var Users = sequelize.define('Users', _usersModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getUsersByName: function (usersname, cb) {
                var query = {
                    where: {
                        name: usersname
                    }
                };
                Users.findOne(query).then(cb);
            },
            getUsersById: function (userid, cb) {
                var query = {
                    where: {
                        userid: userid
                    }
                };
                Users.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Users.findAll().then(cb);
            },
            deleteUsersByID: function (userid, cb) {
                Users.destroy({ where: { userid: userid } }).then(cb);
            },
            addUsers: function (name, title, image, phone, email, password, status, location, isAdmin, isModerator, isViewer, cb) {
                Users.create({
                    name: name,
                    title: title,
                    image: image,
                    phone: phone,
                    email: email,
                    password: password,
                    status: status,
                    location: location,
                    isAdmin: isAdmin,
                    isModerator: isModerator,
                    isViewer: isViewer,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editUsers: function (userid, name, title, image, phone, email, password, status, location, isAdmin, isModerator, isViewer, cb) {
                Users.update({
                    name: name,
                    title: title,
                    image: image,
                    phone: phone,
                    email: email,
                    password: password,
                    status: status,
                    location: location,
                    isAdmin: isAdmin,
                    isModerator: isModerator,
                    isViewer: isViewer
                }, {
                        where: {
                            userid: userid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'users',
        timestamps: false
    });
    return Users;
};
