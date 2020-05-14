const express = require('express');
const router = express.Router();
const mongo = require('../mongodbConnect.js');


router.get('/', function (req, res, next) {
    const question = req.query.question;
    console.log(req);
    mongo.db.collection('COVID-19').find({
        question: question
    }).toArray(function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;