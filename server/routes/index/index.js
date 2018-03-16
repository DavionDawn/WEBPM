var express = require('express');
var router = express.Router();
var gcal = require('../../config/google_api/gcal.js');
var log = require('../../config/config')["log"];
var Sequelize = require('sequelize');
var models = require('../../models');
var BASE_OPTS = require("../../config/config");
var md5 = require('md5');

// get homepage
router.get('/', function (req, res) {
    res.render('./index');
});

router.get('/getEvents', function (req, res) {
    gcal.getEvents(function (eventList) {
        res.send({
            success: true,
            eventList: eventList
        });
    });
});

var userDefault = function (email) {
    var userDef = {
        username: 'Your Name',
        status: 'activated',
        dob: '01/01/2001',
        phone: '0000 000 000',
        location: 'DEK Vietnam',
        email: email,
        avatar: '/img/profiles/defaultProfile.jpg',
        isAdmin: false,
        isTrainer: false,
        isTrainee: true,
        belong2Team: 'Team Innova',
        isExperienced: 0,
        userType: 'CBA'
    }
    return userDef;

};

router.post('/login', function (req, res, next) {
    log.info('Post /login');
    models.User.getUserByEmailAndPassword(req.body.username, md5(req.body.password), function (_user) {
                if (_user && _user.status !== 'deactivated') {
                    passport.serializeUser(function (_user, done) {
                        done(null, _user.email);
                    });
                    // get user's credentials from session
                    passport.deserializeUser(function (email, callback) {
                        callback(null, {
                            email: email
                        });
                    });
                    return req.login(_user, function () {
                        log.info('User login: ' + _user.email);
                        var currentRole = _user.isAdmin ? 1 :
                            _user.isTrainer ? 2 :
                                _user.isTrainee ? 3 : 0;
                        res.send({
                            role: currentRole,
                            data: _user,
                            success: true,
                            msg: 'You are authenticated!'

                        });
                    });
                } else {
                    log.info('User login failed.');
                    res.send({
                        userid: null,
                        success: false,
                        msg: 'Wrong email or password',
                    });
                }
            })
});

router.get('/isLogin', function (req, res) {
    if (req.isAuthenticated()) {
        res.send({
            success: true,
            msg: "You are logged in"
        });
    } else {
        res.send({
            success: false,
            msg: "You are NOT logged in"
        });
    }
})

router.get('/logout', function (req, res) {
    // destroy session and redirect to homepage when logout
    log.info('GET /logout');
    req.logout();
    req.session.destroy();
    res.send({
        success: true,
        msg: "Logout successfully"
    });

});




module.exports = router;
