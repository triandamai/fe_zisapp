/**
 * Author
 *
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
      reqiresAuth: true,
    },
    children: [
      {
        path: "",
        redirect: "dashboard",
      },
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/pages/dashboard/dashboard.vue"),
        meta: {
          title: "Default Dashboard | Endless - Premium Admin Template",
          reqiresAuth: true,
        },
      },

      {
        path: "user",
        name: "user",
        component: () => import("@/pages/user/datauser.vue"),
        meta: {
          title: "Data User",
        },
      },
      {
        path: "user/add",
        name: "adduser",
        component: () => import("@/pages/user/adduser.vue"),
        meta: {
          title: "Tambah User",
        },
      },
      {
        path: "user",
        name: "edituser",
        component: () => import("@/pages/user/edituser.vue"),
        meta: {
          title: "Edit User",
        },
      },

      {
        path: "muzaki",
        name: "muzaki",
        component: () => import("@/pages/muzaki/datamuzaki.vue"),
        meta: {
          title: "Data Muzaki",
        },
      },
      {
        path: "muzaki/add",
        name: "addmuzaki",
        component: () => import("@/pages/muzaki/addmuzaki.vue"),
        meta: {
          title: "Tambah Muzaki",
        },
      },
      {
        path: "muzaki/edit",
        name: "editmuzaki",
        component: () => import("@/pages/muzaki/editmuzaki.vue"),
        meta: {
          title: "Edit Muzaki",
        },
      },
      {
        path: "mustahik",
        name: "mustahik",
        component: () => import("@/pages/mustahik/datamustahik.vue"),
        meta: {
          title: "Data Mustahik",
        },
      },
      {
        path: "mustahik/add",
        name: "addmustahik",
        component: () => import("@/pages/mustahik/addmustahik.vue"),
        meta: {
          title: "Tambah Mustahik",
        },
      },
      {
        path: "mustahik/edit",
        name: "editmustahik",
        component: () => import("@/pages/mustahik/editmustahik.vue"),
        meta: {
          title: "Edit Mustahik",
        },
      },
      {
        path: "kantorlayanan",
        name: "kantorlayanan",
        component: () => import("@/pages/kantorlayanan/datakantorlayanan.vue"),
        meta: {
          title: "Data Kantor Layanan",
        },
      },
      {
        path: "kantorlayanan/add",
        name: "addkantorlayanan",
        component: () => import("@/pages/kantorlayanan/addkantor.vue"),
        meta: {
          title: "Tambah Kantor Layanan",
        },
      },
      {
        path: "kantorlayanan/edit",
        name: "editkantorlayanan",
        component: () => import("@/pages/kantorlayanan/editkantor.vue"),
        meta: {
          title: "Edit Kantor Layanan",
        },
      },

      /**
       *!ini buat contoh
       */
      {
        path: "akad",
        name: "akad",
        component: () => import("@/pages/akad/akad.vue"),
        meta: {
          title: "akad",
        },
      },

      {
        path: "akad/add",
        name: "addakad",
        component: () => import("@/pages/akad/addakad.vue"),
        meta: {
          title: "akad",
        },
      },
      {
        path: "akad/edit/:id",
        name: "editakad",
        component: () => import("@/pages/akad/editakad.vue"),
        meta: {
          title: "akad",
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/auth/login.vue"),
  },
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
  },
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
