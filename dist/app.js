"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const connect_1 = __importDefault(require("./connect"));
const api_1 = __importDefault(require("./api"));
const PORT = process.env.PORT;
const BASE_PATH = process.env.BASE_PATH;
const middleware = {
    api: {
        cors: cors_1.default
    }
};
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// handle base routes
app.get('/', (req, res) => {
    res.send('UTOGI TS App is Running.');
});
app.get('/test', (req, res) => {
    res.send('UTOGI test.');
});
console.log('in the root::::');
app.use('/api/v1', api_1.default(middleware));
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`server is running on PORT ${PORT}`);
    yield connect_1.default();
}));
