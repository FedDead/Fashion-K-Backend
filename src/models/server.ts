import express, { Application, Request, Response }  from 'express';
import ApiProduct  from '../routes/product';
import ApiDressed from '../routes/dressed'
import db from '../db/connection';
import cors from 'cors';

class Server {

    private app: Application;
    private port: string;
     
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen(); 
        this.middleware();
        this.routes();
        this.dbConnect();
     }

     listen(){
        this.app.listen( this.port,() => {
            console.log(`The application listen to port ${this.port}`);
        })
     }

     middleware(){
        this.app.use(express.json());

         this.app.use(cors());
     }

     routes(){
        this.app.get('/', (req: Request,res: Response) => {
            res.json({
                msg: 'API Working'
            })
            this.app.use('/api/product',ApiProduct);
            this.app.use('/api/dressed',ApiDressed);
        })
     }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }


}

export default Server;
