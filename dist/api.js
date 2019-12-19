"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Handler_1 = __importDefault(require("./Handler"));
const Routes_1 = require("./Routes");
const apiRoutes = function (middleware) {
    try {
        console.log('in the api:::::::::::::');
        const router = express_1.default.Router();
        const { api: { cors } } = middleware;
        // enable CORS
        router.use(cors());
        router.use('/servicepath1', Routes_1.sampleService.routes(Handler_1.default.http));
        return router;
    }
    catch (e) {
        console.log(e);
    }
};
module.exports = apiRoutes;
