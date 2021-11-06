//Import npm modules
import express from 'express';
//Import and setup .env files
import dotenv from 'dotenv';
dotenv.config();

//Init express app
const app = express();

//start server
app.listen(process.env.PORT, () => {
    console.log(`Server started at: http://localhost:${process.env.PORT}`);
});

//Middlewere's
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setup routes
app.use('/', require('./routes/root.router'));

