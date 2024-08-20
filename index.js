const server = require('json-server')

const app = server.create()

PORT = 4000 || process.env.PORT;

const middleware = server.defaults()

const router = server.router('db.json')

app.use(middleware);

app.use(router);


app.listen(PORT,()=>{
    console.log("server running at PORT " , PORT);
})