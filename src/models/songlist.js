let mysql = require('mysql');
let conf = require('../conf');

let connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
    items: (req, callback) => {
        sql = 'SELECT * FROM songlist';
        return connection.query(sql, callback);
    },
    item: (req, callback) => {
        sql = mysql.format('SELECT * FROM songlist WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    add: (req, callback) => {
        sql = mysql.format('INSERT INTO songlist SET ?', req.body);
        return connection.query(sql, callback);
    },
    del: (req, callback) => {
        sql = mysql.format('DELETE FROM songlist WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    patch: (req, callback) => {
        sql = mysql.format('UPDATE songlist SET ? WHERE sName = ?', [req.body, req.params.sName]);
        return connection.query(sql, callback);
    },
}