import db from '../db/db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const login = async(req,res) => {

    const secret = "asdas&%40assda3-913ia213-asodpk_(@i/#8";
    const expire = "90d";
    try {
        const {email , pass} = req.body;
  
        if(!email || !pass){
           return res.status(200).send({message: 'Please enter Name or Password'});
        }
        db.query('SELECT * FROM basicusers WHERE email = ?',[email],async(error,results) =>{
          if(results ==false){
              console.log("asdas");
              return res.status(200).send({message: 'Use with such a Name does not exist.'}) 
          }
          
          if(!results || !(await bcrypt.compare(pass,results[0].password))){
            return res.status(200).send({message: 'Wrong Name or Password'}) 
          }else{
              const id = results[0].id;
              const token = jwt.sign({id:id}, secret,{
                  expiresIn: expire
              });
             const cookieOptions ={
                  expires: new Date(
                     Date.now() + expire * 24 *60 *60 *1000
                 ),
                 httpOnly: true
             }
             res.cookie('jwt',token,cookieOptions);
          }
        })
    } catch (error) {
        console.log(error);
    }
  }
   
  export default login;