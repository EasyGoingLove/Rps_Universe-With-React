import db from '../db/db.js';
import bcrypt from 'bcryptjs';



const register = (req,res) => {
  console.log(req.body);
  const {name,pass,rep_pass} =req.body.user;

  db.query('SELECT name FROM users WHERE name = ?', [name], async (error,results)=>{
    if(error){console.log(error)}
      
     if(Object.keys(results).length !== 0 && results.constructor !== Object){
        return res.status(200).send({message: 'This name is already taken'})   
    }
     else if (pass !== rep_pass){
        return res.status(200).send({message: "Passwords don't match"}) 
    }
    else if (!name){
        return res.status(200).send({message: "Name field is empty"}) 
    }
    else if (!pass){
        return res.status(200).send({message: 'Password field is empty'})
    }
    else if (!rep_pass){
        return res.status(200).send({message: 'Repeat Password field is empty'})
    }

    let hashedPass = await bcrypt.hash(pass, 8);
        
        db.query('INSERT INTO users SET ?', {
          name:name , password:hashedPass
        }, (error,results)=>{
            if(error){console.log(error)}
            else{console.log("u did it!");
            res.redirect('');}
        });

  });
};
export default register;