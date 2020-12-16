import mongoose from 'mongoose';
require('dotenv/config');

mongoose.connect(String(process.env.MONGODB),{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

