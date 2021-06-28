import express from 'express';
import session from 'express-session';
import db from './db/db.js';
import bodyParser from 'body-parser';
import router from './routes/router.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import flash from 'req-flash';


db.connect((err) => {
  if(err) throw err;
   console.log("Connectiong is good.")
});

const app = express();


app.use(cors());
app.use(session({secret: '{secret}', name: 'session_id', saveUninitialized: true, resave: true}));
app.use(flash());
app.use(express.json());
app.use(bodyParser.urlencoded())


app.use('/',router);
app.use('/auth', authRouter);
app.use('/arcadeRPS',router);


app.get('*', function(req, res){
    res.send('Error 404 , No such url found');
  });

app.listen('5000' , ()=> {
    console.log('Server listening on port 5000!');
})