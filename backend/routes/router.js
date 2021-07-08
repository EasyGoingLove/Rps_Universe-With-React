import express from 'express';

import getUser from '../db/getUser.js';


const router = express.Router();


router.post('/arcadeRPS',(req,res)=>{

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
    }
    else{
        computer.option = rps[rndInt];
        computer.condition = "You Lose"; 
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