class Router{
    /**
     * Set the express application and called from application class
     * 
     * @param {Express} expressApp
     */
    setExpressApp(expressApp){
        this.expressApp = expressApp;
    }

    /**
     * Get
     */
    get(route, action =[controller,method]){
        this.expressApp.get(route,(request,response)=>{
            let controllerObject = new action[0];
            let output = controllerObject[action[1]](request,response);
            response.send(output);
        })
    }

}
export default new Router