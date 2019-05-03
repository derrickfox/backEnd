const Source = require('../models/source.model');

// //Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/sources.js
exports.source_create = function (req, res) {
    let source = new Source(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    source.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Source Created successfully')
    })
};

// controllers/sources.controller.js
exports.source_details = function (req, res) {
    Source.findById(req.params.id, function (err, source) {
        if (err) return next(err);
        res.send(source);
    })
};

exports.source_update = function (req, res) {
    Source.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, source) {
        if (err) return next(err);
        res.send('Source udpated.');
    });
};

exports.source_delete = function (req, res) {
    Source.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.source_get_all = function (req, res) {
    Source.find({}, function (err, sources) {
        console.log('sources', sources);
        if (err) return next(err);
        res.send(sources);
    })
};