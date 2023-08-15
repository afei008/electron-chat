/** @format */

import { createRouter, createWebHistory } from 'vue-router';

import routes from './modules/constant';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
