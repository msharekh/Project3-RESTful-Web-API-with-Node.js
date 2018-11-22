const express = require('express')
const app = express()
const port = 8000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Home http://localhost:8000
app.get('/', (req, res) => 
    res.send('Hello World!')
)

// GET Block Endpoint    http://localhost:8000/block/[blockheight]

app.get('/block/[blockheight]', (req, res) => 
    res.send('Hello World!')
)

// POST Block Endpoint   http://localhost:8000/block

app.post('/addBlock', function (req, res) {
    res.send('HEEYYYY Got a POST request')
})