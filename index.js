const express=require('express');
const mongoose=require('mongoose');
const userRoutes=require('./routes/userRoutes');
const errorHandler=require('./middeware/errorHandler');

const app=express();
app.use(express.json());

const mongoDBUri="mongodb+srv://hemrajbhatia988:l9pBh1W3Hf0YP54y@cluster0.n8vxoep.mongodb.net/";

mongoose.connect(mongoDBUri).then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.error("could not connect to DB");
})

app.use('/api',userRoutes);
app.use(errorHandler);
app.listen(3000);