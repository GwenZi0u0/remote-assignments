const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")

const corsOptions = {
    "origin": "http://localhost:3000",
    "methods": "GET",
    "credentials": true,
    "optionsSuccessStatus": 200
}

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send({ "result": 'Hello, My Server!' })
})

app.use(express.static('../frontend'));

app.get('/getData', (req, res) => {
    const number = req.query.number;
    if (!number) {
        res.json({ "result": 'Lack of Parameter' });
    } else if (Number.isInteger(+number) && +number > 0) {
        let num = 0;
        for (i = 1; i <= +number; i++) {
            num += i;
        }
        let result = num.toString();
        res.json({ result });
    } else {
        res.json({ "result": 'Wrong Parameter' });
    }
})

app.listen(port, () => {
    console.log(`listen port: ${port}`);
})

// 1.When a user enters http://localhost:3000/getData in a browser’s address bar,
//  show the "Lack of Parameter" message in the page.
// 2.When a user enters some url like http://localhost:3000/getData?number=xyz in a
//  browser’s address bar, show the "Wrong Parameter" message in the page.
// 3. When a user enters http://localhost:3000/getData?number=5, they should get the
// result of 1+2+....+5 in the page.
// 4. Generally speaking, when a user enters
// http://localhost:3000/getData?number=POSITIVE_INTEGER, they can get the result
// of 1+2+....+ POSITIVE_INTEGER in the page.

// const path = require("path")
// app.get('/sum', async (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend', 'sum.html'));
// });s