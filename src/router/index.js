import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import SplashScreenView from "@/views/SplashScreenView";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'splash-screen',
    component: SplashScreenView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/createPw',
    name: 'createPw',
    component: () => import(/* webpackChunkName: "createPw" */ '../views/CreatePwView.vue')
  },
  {
    path: '/newMnemonic',
    name: 'newMnemonic',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/MnemonicView.vue')
  },
  {
    path: '/mnemonicChk',
    name: 'mnemonicChk',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/MnemonicChkView.vue')
  }
  ,
  {
    path: '/createAccount',
    name: 'createAccount',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/CreateAccountView.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/WelcomeView.vue'),
  },
  {
    path: '/select-action',
    name: 'select-action',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/SelectActionView.vue'),
  },
  {
    path: '/create-password',
    name: 'create-password',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/CreatePassword.vue'),
  },
  {
    path: '/seed-phrase',
    name: 'seed-phrase',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/SeedPhraseView.vue'),
  },
  {
    path: '/seed-phrase-confirm',
    name: 'seed-phrase-confirm',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/SeedPhraseConfirmView.vue'),
  },
  {
    path: '/import-with-seed-phrase',
    name: 'import-with-seed-phrase',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/ImportWithSeedPhraseView.vue'),
  },
  {
    path: '/unlock',
    name: 'unlock',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/UnlockView.vue'),
  },
  {
    path: '/home',
    name: 'home',
    props: true,
    component: () => import(/* webpackChunkName: "newMnemonic" */ '../views/Home2View.vue'),
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  // history: createWebHistory(process.env.BASE_URL),
  routes: routes.map(route => {
    return {
      ...route,
    }
  })
})

router.afterEach((to) => {
  store.commit('SET_LAST_ROUTE_PATH', to.path);
});

export default router
