// 1 import jsonServer
const jsonServer = require('json-server')

// 2 create a server 
const server =jsonServer.create()

// 3 setup path for db.json
const router = jsonServer.router('db.json')

//4 return middlewire
const middlewire=jsonServer.defaults()

// 5 setup port for server
const port= process.env.port ||  3001

// 5 use middlewire and router
server.use(middlewire);
server.use(router);

// 7 to run the server
server.listen(port,()=>{

    console.log('listening on port '+port); 
})