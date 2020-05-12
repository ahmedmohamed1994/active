import  express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import serviceProvidersContainer from './service-providers-container';
require('dotenv').config();

export default class Application{
    constructor(){
        this.prepareServer();
        this.initializeProvider();
        router.setExpressApp(this.express);
    }
    /**
     * Prepare the express server
     */
    prepareServer(){
        this.express = express();

        this.express.use(bodyParser.urlencoded({
            extended:true,
        }));
    }

    /**
     * initialize our service Provider container
     */
    initializeProvider(){
        this.serviceProviders = new serviceProvidersContainer;
        this.serviceProviders.boot();
    }

    /**
     * Run the application
     */
    run(){
        this.serviceProviders.registerRoutes();
        this.express.listen(process.env.PORT,()=>{
            console.log(`server runs on ${process.env.MODE} mode on port ${process.env.PORT} ..`);
            
        });
    }
}