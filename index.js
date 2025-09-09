const express = require('express');
const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})

//(R)Index
app.get(`/`, (req, res) => {
    res.send(`Welcome to my Blog!`)
})

//(c)reate
app.post(`/api/post`, (req, res) => {
    res.send(`create something...`);
})

//(R)ead
app.get(`/api/post/:id`, (req, res) => {
    res.send(`reading post with ID:` + req.params.id);
})

//(U)pdate
app.patch(`/api/post/:id`, (req, res) => { //or PUT verb
    res.send(`patching post wirh ID:` + req.params.id);
})

//(D)elete
app.delete(`/api/post/:id`, (req, res) => {
    res.send(`deleting post with ID:` + req.params.id);
})