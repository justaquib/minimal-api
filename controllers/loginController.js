/************************************************************
 L O G I N  ||  C O N T R O L L E R
************************************************************/

import { PrismaClient } from 'prisma/client';
import { config } from "dotenv";
import helpers from '../helper';
// import middleware from '../middlerware';

config()
const prisma = new PrismaClient({ log: ['query', 'info'] });

let login = {};

login.authCheckUser = async(req,res) => {
    const payload           =   req.body;
    const countedUser       =   await helpers.countUser(payload.mobile,payload.email);
    const passwordMatch     =   await helpers.comparePassword(payload.password,payload.email,payload.mobile);
    try{
        if(countedUser === 1){
            if(passwordMatch === true){
                return res.status(201).json({"message":"Successfully logged in"}); 
            }
            else{
                return res.status(200).json({"message":"Password does not match"});
            }
        }
        else{
            return res.status(200).json({"message":"User does not exist!"});
        }
    }
    catch{
        return res.status(500).json({"message":"Something went wrong with user login"});
    }
    
}



export default login;