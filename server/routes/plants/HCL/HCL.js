var router = require('express').Router();
var models = require('../../models');
var log = require('../../config/config')["log"];
var sequelize = require("sequelize");

router.get('/donothing', function (req, res) {
    var datasend = {
            success: true,
            msg: 'response success',
        };
        res.send(datasend);
});

module.exports = router;
