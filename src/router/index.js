import { createRouter, createWebHistory } from 'vue-router';

// import pages
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import ProjectDetailPage from '../pages/ProjectDetailPage.vue';

// router
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  // array of objects, every object is a route
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/contact', name: 'contact', component: ContactPage },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectDetailPage,
    },
    { path: '/not-found', name: 'not-found', component: NotFoundPage },
    { path: '/:pathMatch(.*)*', redirect: '/not-found' },
  ],
});

export { router };
