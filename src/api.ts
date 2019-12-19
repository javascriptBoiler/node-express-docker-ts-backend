import express from 'express';
import handler from './Handler';
import {sampleService} from './Routes'

const apiRoutes = function(middleware) {
    try {
        console.log('in the api:::::::::::::')
        const router = express.Router();
        const {api: {cors}} = middleware;
        // enable CORS
        router.use(cors());

        router.use('/servicepath1', sampleService.routes(handler.http));

        return router;
    } catch (e) {
        console.log(e);
    }
};

module.exports = apiRoutes;
