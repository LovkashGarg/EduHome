const express=require('express');
const cors=require("cors");
const app=express();
const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
require("dotenv").config();
app.use(express.json());
 const fileUpload=require("express-fileupload");
 app.use(fileUpload(
    {useTempFiles:true,
    tempFileDir:'/tmp/'} 
    ));

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());


const PORT=process.env.PORT;
const userRoutes=require('./Routes/UserRoutes');
const courseRoutes=require('./Routes/courseRoutes');
const profileRoutes=require('./Routes/profileRoutes');
const classRoutes=require('./Routes/classRoutes');
const SearchRoutes=require('./Routes/SearchRoutes');

// mounting on the routes
app.use('/api/v1/auth',userRoutes);
app.use('/api/v1/profile',profileRoutes);
app.use('/api/v1/course',courseRoutes);
app.use('/api/v1/classes',classRoutes);
app.use('/api/v1/Search',SearchRoutes);



// db se connect kar diya
require('./config/Database').dbConnect();

app.listen(PORT,()=>{
    console.log("Listening on Port 5000")
})