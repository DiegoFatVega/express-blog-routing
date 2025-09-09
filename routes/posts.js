const express = require(`express`)
const router = express.Router();

//(R)Index
router.get(`/`, (req, res) => {
    res.send(`Welcome to my Blog!`)
})

//(c)reate
router.post(`/`, (req, res) => {
    res.send(`create something...`);
})

//(R)ead
router.get(`/:id`, (req, res) => {
    res.send(`reading post with ID:` + req.params.id);
})

//(U)pdate
router.patch(`/:id`, (req, res) => { //or PUT verb
    res.send(`patching post wirh ID:` + req.params.id);
})

//(D)elete
router.delete(`/:id`, (req, res) => {
    res.send(`deleting post with ID:` + req.params.id);
})

module.exports = router;