import express,{ Application,Request,Response,NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import "dotenv/config";
import Connect from './connect';
import routes from './api'

const PORT = process.env.PORT;
const BASE_PATH:string = process.env.BASE_PATH;

const middleware = {
    api: {
        cors
    }
};

const app : Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle base routes
app.get('/',(req:Request,res : Response ) => {
    res.send('UTOGI TS App is Running.')
})
app.get('/test',(req:Request,res : Response ) => {
    res.send('UTOGI test.')
})
console.log('in the root::::')
app.use(BASE_PATH,routes(middleware));

app.listen(PORT, async () => {
    console.log(`server is running on PORT ${PORT}`)
    await Connect();
})