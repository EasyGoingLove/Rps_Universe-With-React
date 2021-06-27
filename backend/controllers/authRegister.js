import db from '../db/db.js';
import bcrypt from 'bcryptjs';


const register = (req,res) => {
  console.log(req.body);
  const {name,pass,rep_pass} =req.body;

  db.query('SELECT name FROM users WHERE name = ?', [name], async (error,results)=>{
    if(error){console.log(error)}
   
     if(Object.keys(results).length !== 0 && results.constructor !== Object){
        return res.json("User already exists with this name.");
    }
     else if (pass !== rep_pass){
        return res.json("Passwords don't match");
    }
    else if (name === undefined || name === null || name ==="" ||name ===NaN){
        return res.json("Name field is empty");
    }
    else if (pass === undefined || pass === null || pass ==="" ||pass ===NaN){
        return res.status(200).send({message: 'mssg'})
    }
    else if (rep_pass === undefined || rep_pass === null || rep_pass ==="" ||rep_pass ===NaN){
        return res.json("Repeat password field is empty");
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