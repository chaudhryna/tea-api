const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'China',
        'waterTemp': 'hot',
        'steepTimeSeconds': 200,
        'caffine': true,
        'flavor': 'sweet',
    },
    'macha': {
        'type': 'green',
        'origin': 'Pakistan',
        'waterTemp': 'cold',
        'steepTimeSeconds': 300,
        'caffine': false,
        'flavor': 'bitter',
    },
    'unknown': {
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 0,
        'caffine': false,
        'flavor': 'unknown',
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
    const teaName = req.params.name.toLowerCase();
    if (tea[teaName]) {
        res.send(tea[teaName]);
    } else {
        res.send(tea.unknown);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});