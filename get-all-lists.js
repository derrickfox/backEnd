const GrandList = require('./grand-list-model');

exports.get_all_lists = function (req, res) {
    GrandList.find({}, function (err, lists) {
        console.log('lists', lists);
        if (err) return next(err);
        res.send(lists);
    })
};