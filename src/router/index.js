/**
 * Author Trian Damai
 * Bakaran Project
 */
import Vue from "vue";
import Router from "vue-router";
import ApiService from "@/services/api.service";
import { getUser } from "@/services/jwt.service";

// component

Vue.use(Router);

/**
 * routes definition
 * there only 1 nested routes
 * @see Router
 * ex:
 *  route1
 *    subroute1
 *    subroute2
 *  route2
 */
const routes = [
  /**
   * base route in this route will redirect to main
   */
  { path: "", redirect: { name: "dashboard" } },
  /**
   * in this route all children reqiresAuth for access
   */
  {
    path: "/main",
    component: () => import("../components/body"),
    meta: {
      reqiresAuth: true
    },
    children: [
      {
        path: "",
        redirect: "dashboard"
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/pages/dashboard/dashboard.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      },

      /**
       *
       */
      {
        path: "akad",
        name: "akad",
        component: () => import("@/pages/akad/akad.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/auth/login.vue")
  }
];

/**
 * instance router
 * mode use instead useing history must use hash for desktop
 */
const router = new Router({
  routes,
  base: process.env.BASE_URL || "/",
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  linkActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

/**
 * check session of user
 * if the user not  logged in route with meta requiresAuth the route will denied and redirect to login
 */
router.beforeEach((to, from, next) => {
  ApiService.setHeader();
  const user = getUser();
  if (to.meta.title) document.title = to.meta.title;
  if (to.meta.reqiresAuth) {
    // if (user) {
    //   next();
    // } else {
    //   next();
    //   //next({ path: "/login" });
    // }
    next();
  } else {
    next();
  }
});

export default router;
