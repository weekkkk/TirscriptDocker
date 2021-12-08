import _Vue from "vue";
import TableBl from "@/components/table/models/image-table-bl";
import ServerBoxBL from "@/components/server-box/models/server-box-bl";

export default {
    install(Vue: typeof _Vue)  {
        const plugin = new MainStore();  
        Vue.prototype.$mainStore = plugin;
        (Vue as any).$mainStore = plugin;
        }
}

export class MainStore {

    constructor(){
        //_Vue.$api.SchoolService.GetSchoolInfoEvent.on(this.onGetSchoolInfo.bind(this));         
        //_Vue.$api.SchoolService.GetSchoolInfo();
    }

    
    table: TableBl = new TableBl([]);
    serverBox: ServerBoxBL = new ServerBoxBL([], this.table.rows);
}



