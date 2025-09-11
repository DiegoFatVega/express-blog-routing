const posts = require(`../data/posts`)

function index (req, res) {
  //res.send(`Welcome to my Blog!`)
    let filtered_posts = posts;

    if(req.query.tag){
        filtered_posts = posts.filter( post => post.tags.includes(req.query.tag))
    }
    res.json(filtered_posts)
}

function show (req, res){
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
}

function store (req, res) {
  res.send(`create something...`);
}

function update (req, res)  { //or PUT verb
  res.send(`patching post with ID:` + req.params.id);
}

function modify (req, res) {
  res.send(`pushing post with ID:` + req.params.id);
}

function destroy (req, res) {
  //res.send(`deleting post with ID:` + req.params.id);
  const post_id = req.params.id;
  const post = posts.find((post) => post.id === parseInt(post_id));

  if (!post) {
    res.status(404).json({
      error: `Not found`,
      message: `Resource not found`
    })
  } 
  posts.splice(posts.indexOf(post),1)
  res.sendStatus(204);
  console.log(posts);

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}