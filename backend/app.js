import express from 'express';
import db from './db/db.js';
import bodyParser from 'body-parser';
import router from './routes/router.js';
import authRouter from './routes/auth.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';


db.connect((err) => {
  if(err) throw err;
   console.log("Connectiong is good.")
});

const app = express();

app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

// app.use(function(req, res, next) {
//   res.header('Content-Type', 'application/json;charset=UTF-8')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   )
//   next()
// })


app.use(express.json());
app.use(bodyParser.urlencoded());



app.use('/',router);
app.use('/auth', authRouter);
app.use('/arcadeRPS',router);


app.get('*', function(req, res){
    res.send('Error 404 , No such url found');
  });

app.listen('5000' , ()=> {
    console.log('Server listening on port 5000!');
})