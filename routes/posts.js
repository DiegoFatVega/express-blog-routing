const express = require(`express`)
const router = express.Router();

let posts = [
  {
    id: 1,
    title: "Ciambellone soffice della nonna",
    content: "Un dolce classico della tradizione italiana, soffice e profumato, ideale per la colazione o la merenda.",
    img: "images/ciambellone.jpeg",
    tags: ["dolci", "colazione", "tradizione", "ciambellone"]
  },
  {
    id: 2,
    title: "Cracker alla barbabietola",
    content: "Snack croccante e salutare a base di barbabietola, perfetto come aperitivo o spuntino leggero.",
    img: "images/cracker_barbabietola.jpeg",
    tags: ["salato", "barbabietola", "snack", "vegetariano"]
  },
  {
    id: 3,
    title: "Pane fritto dolce",
    content: "Un pane soffice fritto e spolverato con zucchero, goloso e irresistibile, tipico delle feste di paese.",
    img: "images/pane_fritto_dolce.jpeg",
    tags: ["dolci", "fritti", "tradizione", "merenda"]
  },
  {
    id: 4,
    title: "Pasta alla barbabietola",
    content: "Un primo piatto colorato e ricco di sapore, con crema di barbabietola e formaggio cremoso.",
    img: "images/pasta_barbabietola.jpeg",
    tags: ["primi", "pasta", "barbabietola", "vegetariano"]
  },
  {
    id: 5,
    title: "Torta paesana",
    content: "Un dolce rustico tipico della Brianza, preparato con pane raffermo, cacao, uvetta e pinoli.",
    img: "images/torta_paesana.jpeg",
    tags: ["dolci", "tradizione", "pane", "torta"]
  }
];

//(R)Index
router.get(`/`, (req, res) => {
  //res.send(`Welcome to my Blog!`)
  res.json(posts);
})

//(c)reate
router.post(`/`, (req, res) => {
  res.send(`create something...`);
})

//(R)ead or Show
router.get(`/:id`, (req, res) => {
  //res.send(`reading post with ID:` + req.params.id);
  const post_id = req.params.id;
  const post = posts.find((post) => post.id == post_id);

  if (!post) {
    res.status(404).json({
      error: `Post not found`
    })
  } else {
    res.json(post);
  }
})

//(U)pdate
router.patch(`/:id`, (req, res) => { //or PUT verb
  res.send(`patching post with ID:` + req.params.id);
})
//(U)PUT
router.put(`/:id`, (req, res) => {
  res.send(`pushing post with ID:` + req.params.id);
})

//(D)elete
router.delete(`/:id`, (req, res) => {
  //res.send(`deleting post with ID:` + req.params.id);
  const post_id = req.params.id;
  const post = posts.find((post) => post.id == post_id)

  if (!post) {
    res.status(404).json({
      error: `Post not found`
    })
  } else {
    posts.splice(post_id, 1)
    res.status(200).json({
       message: `Post eliminated correctly`,
       posts,
    })
  }
})

module.exports = router;