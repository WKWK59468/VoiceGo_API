let mysql = require('mysql');
let conf = require('../conf');

let connection = mysql.createConnection(conf.db);
let sql = '';

module.exports = {
    items: (req, callback) => {
        sql = 'SELECT * FROM belong';
        return connection.query(sql, callback);
    },
    item: (req, callback) => {
        sql = mysql.format('SELECT * FROM belong WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    add: (req, callback) => {
        sql = mysql.format('INSERT INTO belong SET ?', req.body);
        return connection.query(sql, callback);
    },
    del: (req, callback) => {
        sql = mysql.format('DELETE FROM belong WHERE ?', req.body);
        return connection.query(sql, callback);
    },
    patch: (req, callback) => {
        sql = mysql.format('UPDATE belong SET ? WHERE vId = ? AND tName = ?', [req.body, req.params.vId, req.params.tName]);
        return connection.query(sql, callback);
    },
}