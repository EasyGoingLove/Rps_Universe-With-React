import express from 'express';
import db from '../db/db.js';
import getUser from '../db/getUser.js';


const router = express.Router();


router.post('/arcadeRPS',(req,res)=>{

    console.log(req.body);
    const id = req.body.props.value3;
    const logedIn = req.body.props.value2;
    const computer = {
        option:'',
        value: 0,
        condition:''
    };
    const rps = {
        0:"rock",
        1:"paper",
        2:"scissors"
        
    }
 
    const rndInt = Math.floor(Math.random() * 3) ;
    const user_choice = req.body.props.value;


    if(rndInt==user_choice){
        computer.option = rps[rndInt];
        computer.condition = "Draw";
    }
    else if((rndInt+ 1) % 3 == user_choice){
        computer.option = rps[rndInt];
        computer.condition = "You Win";
        computer.value = 1;
    }
    else{
        computer.option = rps[rndInt];
        computer.condition = "You Lose"; 
        computer.value = -1;
    }

    if(logedIn){
        db.query('SELECT * FROM arcadepoints WHERE id =?',[id],(error,results) =>{
            if(error){console.log(error)}
                if(results.length > 0){
                    if(computer.value ==1){  
                        db.query(`UPDATE arcadepoints SET wins = '${results[0].wins+1}' WHERE wins = '${results[0].wins}'`);  
                    }
                    else if(computer.value ==-1){
                        db.query(`UPDATE arcadepoints SET losses = '${results[0].losses+1}' WHERE losses = '${results[0].losses}'`);
                    }
            }
            else{
                let losses = 0;
                let win = 0 ;

                if(computer.value ==1){win =1;}
                else if(computer.value ==-1){losses =1;}
                
                db.query('INSERT INTO arcadepoints SET ?', {
                    id:id , wins:win,losses:losses
                  }, (error,results)=>{
                      if(error){console.log(error)}
                      else{console.log("u did it!");}
                  });
            }
        });

    }
    res.json(computer);
});


router.post('/userDataRps', (req,res)=>{
    const userInf =  getUser(req.body.id);
    setTimeout(function(){ 
    res.json(userInf);
    },50);
    

});



export default router;