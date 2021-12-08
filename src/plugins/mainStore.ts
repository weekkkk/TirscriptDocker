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

    
    table: TableBl = new TableBl([
        {id: 1, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 2, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 3, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 4, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 5, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 6, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 7, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 8, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 9, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 11, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 12, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 13, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 14, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 15, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 16, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 17, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 18, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 19, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 21, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 22, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 23, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 24, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 25, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 26, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 27, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 28, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 29, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 31, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 32, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 33, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 34, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 35, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 36, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 37, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 38, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 39, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 41, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 42, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 43, name: "Образ", content: [], addRepositoryFormVisible: false},
        {id: 44, name: "Образ", content: [], addRepositoryFormVisible: false},
    ]);
    serverBox: ServerBoxBL = new ServerBoxBL([], this.table.rows);
}



