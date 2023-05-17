import  express  from 'express';
import authRouter from './routes/auth.js';
const app= express();

app.get('/',(req,res)=>{
    res.send('welocome my new api')
})


app.use ('/v1/api/auth', authRouter)

app.listen(7005,()=> console.log("I am running on 7005 port")
)