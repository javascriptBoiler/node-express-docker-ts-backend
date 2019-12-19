"use strict";
const { CreateSample } = require('../controller');
const express = require('express');
const router = express.Router();
function userRoutes(handler) {
    router.route('/1')
        // .get((params)=>{
        //     console.log('handler::::::::::;', handler)
        // });
        .get(handler(CreateSample));
    return router;
}
module.exports = userRoutes;
