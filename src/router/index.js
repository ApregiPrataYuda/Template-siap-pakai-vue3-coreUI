// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'

const routes = [
  /* ========================================
     ROOT REDIRECT
  ========================================= */
  {
    path: '/',
    redirect: '/login',
  },

  /* ========================================
     AUTH ROUTES (NO LAYOUT / GUEST ONLY)
  ========================================= */
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegisterView.vue'),
  },
  
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('@/views/auth/ForgotPasswordView.vue'),
  },

  /* ========================================
     APP LAYOUT (AUTHENTICATED PAGES)
  ========================================= */
  {
    path: '/app', // Mengubah root path layout agar tidak bentrok dengan root '/'
    component: DefaultLayout,
    redirect: '/app/dashboard', // Jika user ke /app, otomatis ke dashboard
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/template/dashboard/DashboardView.vue'),
      },
      
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/template/profile/ProfileView.vue'),
      },

      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/template/table/TableView.vue'),
      },


      {
        path: 'settings',
        name: 'Settings',
        component: () => import('@/views/template/settings/SettingsView.vue'),
      },


      {
        path: 'reports-manager',
        name: 'Manager Reports',
        component: () => import('@/views/template/reports/ReportsManagerView.vue'),
      },

      {
        path: 'reports-sales',
        name: 'Sales Reports',
        component: () => import('@/views/template/reports/ReportsSalesView.vue'),
      },

      {
        path: 'home-sales',
        name: 'Sales Home',
        component: () => import('@/views/template/home/HomeSalesView.vue'),
      },

      {
        path: 'home-manager',
        name: 'Manager Home',
        component: () => import('@/views/template/home/HomeManagerView.vue'),
      },

    ],
  },

  /* ========================================
     404 NOT FOUND HANDLER
  ========================================= */
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/login',
  // },
  {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router