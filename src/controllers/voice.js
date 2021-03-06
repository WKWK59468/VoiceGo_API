let models = require('../models/voice');

class VoiceController {

    searchVoice = (req, res) => {
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

    getVoice = (req, res) => {
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

    addVoice = (req, res) => {
        models.add(req, function(err, results, fields) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }

            // 新的資源已建立 (回應新增資源的 id)
            res.status(201).json(results.insertId);
        });
    }

    delVoice = (req, res) => {
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

    patchVoice = (req, res) => {
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

            // response 被更新的資源欄位，但因 request 主體的欄位不包含 id，因此需自行加入
            res.json(req.body);
        });
    }

}

module.exports = new VoiceController();