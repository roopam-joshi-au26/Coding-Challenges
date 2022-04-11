import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import path,{ dirname} from 'path';
import { fileURLToPath } from 'url';
import {router} from './routes/routes.js';
import {init} from './db.js'
export const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT,()=>console.log('listening on port',PORT));

//connect to server
init()
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(router)

