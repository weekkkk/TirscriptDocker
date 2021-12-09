import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath } from "../vue.config"

Vue.use(VueRouter);

const BaseLayout = () => import("@layouts/base-layout.vue");
const LandingPage = () => import("@pages/landing/landing.vue");
const ServersPage = () => import("@/components/pages/servers/servers.vue");
const ErrorPage = () => import('@pages/error404/error404.vue')

const router = new VueRouter({
  mode: "history",
  //base: publicPath,
  routes: [
    {
      path: "",
      component: BaseLayout,
      children: [
        {
          path: "",
          redirect: "/landing"
        },
        {
          path: "landing",
          component: LandingPage
        },
        {
          path: "",
          redirect: "/servers"
        },
        {
          path: "servers",
          component: ServersPage
        },
      ]
    },
    { path: '/:pathMatch(.*)*', component: ErrorPage },
  ]
});

router.beforeEach((to, from, next) => {
  // console.log(to, from, next);
  //var title = Vue.$mainStore.PageTitle;
  // if (to.meta.title) {
  //   if (title) title = `${to.meta.title} | ${title}`;
  //   else title = to.meta.title;
  // }
  // document.title = title;
  // console.log("document.head.title", document.head.title);


  // if(!Vue.$mainStore.SchoolInfo){
  //   Vue.$api.SchoolService.GetSchoolInfoEvent.once(()=>{
  //     next();
  //   });
  //   Vue.$api.SchoolService.GetSchoolInfo();
  // }
  // else
  next();

});

export default router;
