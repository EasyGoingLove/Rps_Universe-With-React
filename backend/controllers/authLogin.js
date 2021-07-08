import db from '../db/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



const login = async(req,res) => {

 

    const secret = "asdhfghfas&";
    const expire = '90d';
    console.log(req.body.user);
    try {
        const {name , pass} = req.body.user;
  
        if(!name || !pass){
           return res.status(200).send({message: 'Please enter Name or Password'});
        }
        db.query('SELECT * FROM users WHERE name = ?',[name],async(error,results) =>{
          if(results ==false){
              return res.status(200).send({message: 'User with such a Name does not exist.'}) 
          }

          if(!results || !(await bcrypt.compare(pass,results[0].password))){
            return res.status(200).send({message: 'Wrong Name or Password'}) 
          }else{
              const id = results[0].id;
              const token = jwt.sign({id}, secret,{
                  expiresIn: expire
              });
             const cookieOptions ={
                  expires: new Date(
                     Date.now() + 90 * 24 *60 *60 *1000
                 ),
                 httpOnly: false //to be easaly read by js
                 //if in prodyction set value to true for more security
             } 
             console.log(token,cookieOptions);
             res.cookie(id,token,cookieOptions);
             res.header('Access-Control-Allow-Credentials', 'true');
             res.status(200).send({message: 'Successfully Loged in.'})
          }
        })
    } catch (error) {
        console.log(error);
    }
  }
   
  export default login;