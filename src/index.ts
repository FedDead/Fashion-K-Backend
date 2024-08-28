import Server from './models/server';
import dotenv from 'dotenv';


//Configura la variable de ambiente
dotenv.config();

const server = new Server();