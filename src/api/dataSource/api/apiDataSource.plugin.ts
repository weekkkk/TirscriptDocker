import _Vue from "vue";
import ApiDataSource from "./apiDataSource";


  export default {
    install: (Vue: typeof _Vue, url?: string,...options: any[]) => {      // reconnectEnabled: boolean = false, vueNameField: string = "$api"
      const websocket = new ApiDataSource(url);  
      let vueNameField = '$api';
      if(options.length){
        if(typeof options[0]=== "object"){
          if(options[0].vueNameField)
              vueNameField = options[0].vueNameField

          if(options[0].reconnectEnabled!==undefined)
            websocket.webApiService.reconnectEnabled = !!options[0].reconnectEnabled

          websocket.webApiService.tokenSaveType = options[0].TokenSaveType;
        }
        else {          

          if(websocket.webApiService.reconnectEnabled!==undefined)
            websocket.webApiService.reconnectEnabled = options[0]||false;

          if(options[1])
            vueNameField = options[1]
        }

        
      }
      websocket.webApiService.init();
      
      Vue.prototype[vueNameField] = websocket;
      (Vue as any)[vueNameField] = websocket;
    }
  }
