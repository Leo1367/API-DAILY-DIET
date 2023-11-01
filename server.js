import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import conectDB from './config/db.js';
import userRouter from './routes/userRoutes.js'
import mealRouter from './routes/mealRoutes.js'

config()
conectDB()

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/user', userRouter)
app.use('/meal', mealRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})