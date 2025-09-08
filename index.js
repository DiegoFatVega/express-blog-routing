const express = require('express');
const app = express();
const  port = 3000;

app.listen(port, () => {
    console.log(`app listening on port https://localhost:${port}`);
})


//(c)reate
app.post(`/api/create`, (req, res) => {
    res.send(`create something...`);
})

//(R)ead
app.get(`/api/read/:id`,(req, res) => {
    res.send(`reading something...`);
})

//(U)pdate
app.patch(`/api/patch/:id`, (req, res) => {
    res.send(`patching something...`);
})