let express=require('express');
let app=express();
let cors=require('cors')
let router=require('./Router/crud_app')
const conn=require('./DB_Connection/db_conn')


require('dotenv').config()

//middle wares
app.use(express.json());
app.use(cors());
app.use('/crud',router)  //used router to sepearte a api from main file so that it will not cluster all at a place.

//db connection and promise is handled
conn()
.then((resolved)=>{
    console.log('Connected to the database');
})
.catch((err)=>{
    console.log(`Error occured while connecting to the database ${err}`);
})


//basic home api  for testing
app.get('/home',(req,res)=>{
    res.status(200).json({
        "message":"Every thing is OK"
    })
})

app.listen(process.env.PORT || 8000,(err)=>{
    if(!err){
        console.log(`Server is running on port ${process.env.PORT}`);
    }else{
        console.log(err);
    }
})
