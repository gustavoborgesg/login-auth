export default [
  {
    path: "/login",
    component: () => import("@/layouts/blank/BlankLayout.vue"),
    children: [
      {
        name: "Login",
        path: "",
        component: () => import("@/views/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/cadastrar",
    component: () => import("@/layouts/blank/BlankLayout.vue"),
    children: [
      {
        name: "Register",
        path: "",
        component: () => import("@/views/auth/Register.vue"),
      },
    ],
  },
];
