var _eventsModel = require("./DataObjects/events");
module.exports = function (sequelize) {
    var Events = sequelize.define('Events', _eventsModel, {
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
        classMethods: {
            getEventsByName: function (eventsname, cb) {
                var query = {
                    where: {
                        name: eventsname
                    }
                };
                Events.findOne(query).then(cb);
            },
            getEventsById: function (eventid, cb) {
                var query = {
                    where: {
                        eventid: eventid
                    }
                };
                Events.findOne(query).then(cb);
            },
            getAll: function (cb) {
                Events.findAll().then(cb);
            },
            deleteEventsByID: function (eventid, cb) {
                Events.destroy({ where: { eventid: eventid } }).then(cb);
            },
            addEvents: function (name, description, eventtypeid, time, status, note, partid, userid, cb) {
                Events.create({
                    name: name,
                    description: description,
                    eventtypeid: eventtypeid,
                    time: time,
                    status: status,
                    note: note,
                    partid: partid,
                    userid:userid,
                    imgLink: '/img/trainingProgram/training-icon-1.svg'
                }).then(cb);
            },
            editEvents: function (eventid, name, description, eventtypeid, time, status, note, partid, userid, cb) {
                Events.update({
                    name: name,
                    description: description,
                    eventtypeid: eventtypeid,
                    time: time,
                    status: status,
                    note: note,
                    partid: partid,
                    userid:userid
                }, {
                        where: {
                            eventid: eventid
                        }
                    }
                ).then(cb);
            }
        },
        tableName: 'events',
        timestamps: false
    });
    return Events;
};
