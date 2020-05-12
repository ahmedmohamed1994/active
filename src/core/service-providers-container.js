import providers from '../config/providers';
import router from './router';
export default class serviceProvidersContainer{

    serviceProviders = [];

    /**
     * Initialize and collect our service providers list from config file
     */
    boot(){
        for(let i = 0; i < providers.length; i++){

            let providerObjected = new providers[i];

            this.serviceProviders.push(providerObjected);   
        }
    }
    
    /**
     *  Get all routes for every single provider
     */
    registerRoutes(){
        for(let provider of this.serviceProviders){
            if(! provider.routes) continue;
            for(let route of provider.routes){
                route(router);
            }
        }
    }
}