import User,{ Isample1 } from '../models';
import Promise from 'bluebird'

interface ICreateSample1 {
    email: Isample1['email'];
    firstName: Isample1['firstName'];
    lastName: Isample1['lastName'];
}

const CreateSample = ({body, options}) => {
  return new Promise((resolve, reject) => {
      return resolve({status: true, message: 'this is sample message from servicepath1 controller',code: 200});
  });
};
  
module.exports = {
  CreateSample
};