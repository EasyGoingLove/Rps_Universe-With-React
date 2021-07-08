import db from "./db.js";

const getUser = (id) => {
    const userInfo ={
        name:''
    };
    db.query('SELECT * FROM users WHERE id = ?',[id],(error,results) =>{
        if(error){console.log(error)}
        userInfo.name = results[0].name;
    });
 return userInfo;
};
export default getUser;