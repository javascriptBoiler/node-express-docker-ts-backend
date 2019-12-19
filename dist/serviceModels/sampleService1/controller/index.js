"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluebird_1 = __importDefault(require("bluebird"));
// async function CreateSample({user , options}): Promise<Isample1> {
//   console.log('options::::::::::', options)
//   return new Promise((resolve)=>{
//     console.log('get request::::')
//     console.log('options:::::::::', options)
//     resolve({success: true, message:'routes working successfully'})
//   })
//   // const { email, firstName, lastName}: ICreateSample1 = options;
//   // return User.create({
//   //   email,
//   //   firstName,
//   //   lastName
//   // })
//   // .then((data: Isample1) => {
//   //   return data;
//   // })
//   // .catch((error: Error) => {
//   //   throw error;
//   // });
// }
// verify  email
const CreateSample = ({ body, options }) => {
    return new bluebird_1.default((resolve, reject) => {
        return resolve({ status: true, message: 'Email verified successfully', code: 200 });
    });
};
module.exports = {
    CreateSample
};
