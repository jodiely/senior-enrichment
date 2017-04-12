const express = require('express')
const router = express.Router();
const Campuses = require('../../db/models').Campus;

module.exports = router

router.get('/', function (req, res, next) {
    Campuses.findAll({})
    .then(campuses => res.send(campuses))
    .catch(next)
})