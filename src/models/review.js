let mysql = require('mysql');
let conf = require('../conf');

let connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
    items: (req, callback) => {
        sql = 'SELECT * FROM review';
        return connection.query(sql, callback);
    },
    item: (req, callback) => {
        sql = mysql.format('SELECT * FROM review WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    add: (req, callback) => {
        sql = mysql.format('INSERT INTO review SET ?', req.body);
        return connection.query(sql, callback);
    },
    del: (req, callback) => {
        sql = mysql.format('DELETE FROM review WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    patch: (req, callback) => {
        sql = mysql.format('UPDATE review SET ? WHERE mEmail = ? AND vId = ? AND date = ?', [req.body, req.params.email, req.params.vId, req.params.date]);
        return connection.query(sql, callback);
    },
}