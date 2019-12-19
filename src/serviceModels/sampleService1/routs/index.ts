const {CreateSample} = require('../controller');
const express = require('express');
const router = express.Router();

function userRoutes(handler: any) {
    
    router.route('/')
        .get(handler(CreateSample));
    
        return router;
}
module.exports = userRoutes;

