const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})


//(c)reate
app.post(`/api/post`, (req, res) => {
    res.send(`create something...`);
})

//(R)ead
app.get(`/api/post/:id`, (req, res) => {
    res.send(`reading something... `);
})

//(U)pdate
app.patch(`/api/post/:id`, (req, res) => { //or PUT verb
    res.send(`patching something...`);
})

//(D)elete
app.delete(`/api/post/:id`, (req, res) => {
    res.send(`deleting something...`);
})