const http = require('http')

const server = http.createServer((req, res)=>{
// if(req.url === '/'){
//    res.end('Welcome to your Home') 
//  }  
//  if(req.url === '/about'){
//      res.end('Here is our short history')
//  }else{
//     res.end('You are lost') 
//  }

if(req.url ==='/'){
    res.end('Welcome Home')
}

if(req.url === '/about'){
    res.end('about us')
}
res.end('wrong page')
})

server.listen(8000)