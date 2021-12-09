// import {App} from 'vue'
import Api from './api/dataSource/api/apiDataSource'
import Vue from 'vue'


declare module 'vue/types/vue' {
  interface Vue {
    $api: Api
  }
}


const install = (app: any, opts: { url: string }) => {
  if (!(opts || {}).url) {
    console.error('Для работы api плагина необходимо задать параметр url!')
    return
  }
  // const apiDataSource = new ApiDataSource(opts.url);
  const apiDataSource = new Api(opts.url)
  app.config.globalProperties.$api = apiDataSource
  // app.config.globalProperties.$store = store;
  //console.log('api data source: ', apiDataSource);

}

const dialog = {
  install,
}

export default dialog
