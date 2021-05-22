let mysql = require('mysql');
let conf = require('../conf');

let connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
    items: (req, callback) => {
        sql = 'SELECT * FROM member';
        return connection.query(sql, callback);
    },
    item: (req, callback) => {
        sql = mysql.format('SELECT * FROM member WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    add: (req, callback) => {
        sql = mysql.format('INSERT INTO member SET ?', req.body);
        return connection.query(sql, callback);
    },
    del: (req, callback) => {
        sql = mysql.format('DELETE FROM member WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    patch: (req, callback) => {
        sql = mysql.format('UPDATE member SET ? WHERE email = ?', [req.body, req.params.email]);
        return connection.query(sql, callback);
    },
}