import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

const requestListener = (_req: http.IncomingMessage, res: http.ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
}

const server = http.createServer(requestListener);

try {
    server.listen(process.env.PORT, process.env.HOSTNAME, () => {
        console.log(`Server running at http://${ process.env.HOSTNAME }:${ process.env.PORT }`);
    })

} catch (error) {
    console.log(error);
    console.log('See console for more details');
    
}


