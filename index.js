const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require(`./routes/posts`)


app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})

app.use(express.static(`public`));

app.use(`/posts`, postsRouter);
