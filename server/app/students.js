const express = require('express')
const router = express.Router();
const Students = require('../../db/models').Student;

module.exports = router

router.get('/', function (req, res, next) {
    Students.findAll({})
    .then(students => res.send(students))
    .catch(next)
})