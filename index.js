/**
 * Title: Uptime monitoring application
 * Description: A restful APi to monitor uup or down time of user defined links
 * Author : MD>Ariful ISlam
 * Date: 10-11-23
 * 
 */

//dependecies

const http =require('http');
const url=require('url');

//app object

const app ={

}

//configuration
app.config={
    port:3000,
};

//create server

app.createServer =()=>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port,()=>{
        console.log(`listening to port  ${app.config.port}`);

    });

};

//handle request response

app.handleReqRes=(req,res)=>{

    //request handling
    const parsedUrl =url.parse(req.url,true);
    // console.log(parsedUrl)
    const path=parsedUrl.pathname;
    // console.log(path)
    const trimmedPath =path.replace(/^\/+|\/+$/g,'');
    // console.log(trimmedPath)

    const method = req.method.toLowerCase();
    const queryStringObject= parsedUrl.query;
    console.log(queryStringObject)

    //response handle
    res.end('Hello Programmers');
}
 

//start the server 
app.createServer();


