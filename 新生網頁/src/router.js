import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./page/Login.vue";
import AdminPage from "./page/AdminPanelPage.vue";

const routes = [
  { path: "/", component: Login },
  { path: "/admin", component: AdminPage },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
