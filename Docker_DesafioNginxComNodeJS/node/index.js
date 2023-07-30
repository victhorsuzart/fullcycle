const express = require('express');
const util = require('util');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    database: 'nodedb',
    user: 'root',
    password: 'root'    
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);
const sql = 'insert into people(name) values(\'Victhor\');'
connection.query(sql);

app.get('/', (req, res) => {
    
    let nomes = '';
    connection.query("SELECT name FROM people", function (err, rows, fields) {
        if (err) throw err;
        
        for (var i = 0; i < rows.length; i++) {
            nomes = nomes + '<li>' + rows[i].name + '</li>';
        }

        res.send('<h1>Full Cycle Rocks!</h1><br /><ul>'+ nomes +'</ul>');
    });    
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});