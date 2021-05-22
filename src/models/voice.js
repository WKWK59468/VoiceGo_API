let mysql = require('mysql');
let conf = require('../conf');

let connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
    items: (req, callback) => {
        sql = 'SELECT * FROM voice';
        return connection.query(sql, callback);
    },
    item: (req, callback) => {
        sql = mysql.format('SELECT * FROM voice WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    add: (req, callback) => {
        sql = mysql.format('INSERT INTO voice SET ?', req.body);
        return connection.query(sql, callback);
    },
    del: (req, callback) => {
        sql = mysql.format('DELETE FROM voice WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    patch: (req, callback) => {
        sql = mysql.query('UPDATE voice SET ? WHERE vId = ?', [req.body, req.params.vId]);
        return connection.query(sql, callback);
    },
}