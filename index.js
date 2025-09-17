const express = require('express');
const app = express();
const port = 3000;

const postsRouter = require(`./routes/posts`)
const globalMiddlewareRouter = require(`./middleware/globalMiddlewares`)

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`);
})


app.get(`/`, (req, res) =>{
    //app.use(diego) for Server error middleware test
    res.send(`Welcome to my personla blog`);
})

app.use(express.static(`public`));

app.use(`/posts`, postsRouter);

app.use(globalMiddlewareRouter.serverError);

app.use(globalMiddlewareRouter.notFound);
