import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import ReviewMemories from '@/components/ReviewMemories.vue';
import AddMemory from '@/components/AddMemory.vue';
import EditMemories from '@/components/EditMemories.vue';

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: '/memories/review',
    name: 'Review Memories',
    component: ReviewMemories,
  },
  {
    path: '/memories/add',
    name: 'Add Memory',
    component: AddMemory,
  },
  {
    path: '/memories/edit',
    name: 'Edit Memories',
    component: EditMemories,
  },
];

export const router = new VueRouter({
  routes,
});
