"use strict";
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../APIdoc/swagger.json');
const api = require('../api');
const config = require('../config');
const contact_us = require('./contact_us');
const { empo, empe, file, openroute } = require('./router');
const { dashboard_path } = config.get('api');
const { signUp, signIn, user } = require('./user/route');
const apiRoutes = function (middleware) {
    try {
        const router = express.Router();
        //todo add authentication to routes
        const { api: { cors, errorHandler }, auth } = middleware;
        // enable CORS
        router.use(cors());
        //API Documentation api
        router.use('/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        console.log(__dirname);
        router.use('/images', express.static(__dirname + '/files'));
        // user login & signup
        router.use(`${dashboard_path}/signup`, signUp(api.http));
        router.use(`${dashboard_path}/signin`, signIn(api.http));
        router.use(errorHandler);
        return router;
    }
    catch (e) {
        console.log(e);
    }
};
module.exports = apiRoutes;
