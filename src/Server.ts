import express from "express";
import consola, {Consola} from "consola";
import cors from "cors";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

export class Server {
    public app: express.Application;
    public logger: Consola = consola;

    public constructor(){
        this.app = express();
    }

    public start(){
        this.setConfig();
        this.setRequestLogger();
        this.setRoutes();
    }

    private setConfig(){

    }
    private setRequestLogger(){
        
    }
    private setRoutes(){
        
    }
}