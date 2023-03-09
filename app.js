let express=require('express');
let app=express();
let cors=require('cors')
let router=require('./Router/crud_app')

require('dotenv').config()

app.use(express.json());
app.use(cors());
app.use('/crud',router)


app.get('/',(req,res)=>{
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
