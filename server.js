const express = require('express');

const app = express();

app.use(express.static('./dist/ng-league'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ng-league/'}),
);

app.listen(process.env.PORT || 8080);