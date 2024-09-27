// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

app.post('/fibonacci', (req, res) => {
    const { n } = req.body;
    if (n < 0) {
        return res.status(400).send({ message: 'Input must be a non-negative integer.' });
    }
    const result = fibonacci(n);
    res.status(200).send({ message: result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
