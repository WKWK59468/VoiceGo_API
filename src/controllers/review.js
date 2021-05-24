let models = require('../models/review');


class UserController {
    //取得一筆
    getOneReview = (req, res) => {
            models.item(req, (err, results, fields) => {
                if (err) {
                    res.sendStatus(500);
                    return console.error(err);
                }
                if (!results.length) {
                    res.sendStatus(404);
                    console.log(err);
                    return;
                }
                res.json(results);
            });
        }
        //取得全部
    getReview = (req, res) => {
        models.items(req, (err, results, fields) => {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            if (!results.length) {
                res.sendStatus(404);
                console.log(err);
                return;
            }
            res.json(results);
        })
    }

    addReview = (req, res) => {
        models.add(req, function(err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }

            // 新的資源已建立 (回應新增資源的 id)
            res.status(201).json(results.insertId);
        });
    }


    delReview = (req, res) => {
        models.del(req, (err, results, fields) => {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            if (!results.affectedRows) {
                res.sendStatus(410);
                console.log(err);
                return;
            }
            res.sendStatus(204);
        })
    }

    patchReview = (req, res) => {
        models.patch(req, function(err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }

            if (!results.affectedRows) {
                res.sendStatus(410);
                console.log(err);
                return;
            }
            res.json(req.body);
        });
    }
}

module.exports = new UserController();