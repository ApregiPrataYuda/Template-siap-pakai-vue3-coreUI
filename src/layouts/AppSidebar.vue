<script setup>
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CNavGroup,
} from '@coreui/vue'

import {
  useRoute,
  RouterLink,
} from 'vue-router'

import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()
const route = useRoute()

defineProps({
  visible: Boolean,
  unfoldable: Boolean,
})

const emit = defineEmits(['update:visible'])

const colorScheme = computed(() =>
  isDark.value ? 'dark' : 'light'
)

/* ========================================
   MENU CONFIG
======================================== */
const menus = [
  {
    section: 'Main Menu',
    items: [
      {
        label: 'Dashboard',
        icon: 'gauge',
        to: '/app/dashboard',
      },
    ],
  },

  {
    section: 'Sales & Reports',
    items: [
      {
        label: 'Dashboard Sales',
        icon: 'gauge',
        to: '/app/home-sales',
      },
      {
        label: 'Sales management',
        icon: 'chart-line',
        key: 'sales-menu',
        children: [
          {
            label: 'Leads',
            icon: 'user',
            to: '/leads',
          },
          {
            label: 'Customers',
            icon: 'users',
            to: '/customers',
          },
        ],
      },

      {
        label: 'Sales Reports',
        icon: 'file-lines',
        key: 'sales-reports',
        children: [
          {
            label: 'Reports All',
            icon: 'calendar',
            to: '/app/reports-sales',
          },
          {
            label: 'Reports Annual',
            icon: 'chart-bar',
            to: '/app/reports-sales/annual',
          },
        ],
      },
    ],
  },

  {
    section: 'Manager & Reports',
    items: [
      {
        label: 'Dashboard Manager',
        icon: 'gauge',
        to: '/app/home-manager',
      },
      {
        label: 'Manager Management',
        icon: 'chart-line',
        key: 'manager-menu',
        children: [
          {
            label: 'List Sales',
            icon: 'users',
            to: '/manager/list-sales',
          },
          {
            label: 'List Customers',
            icon: 'users',
            to: '/manager/list-customers',
          },
          {
            label: 'List Leads',
            icon: 'user',
            to: '/manager/list-leads',
          },
        ],
      },

      {
        label: 'Manager Reports',
        icon: 'file-lines',
        key: 'manager-reports',
        children: [
          {
            label: 'Reports All',
            icon: 'users',
            to: '/app/reports-manager',
          },

          {
            label: 'Reports PerWeek',
            icon: 'users',
            to: '/app/reports-manager/weekly',
          },
          {
            label: 'Reports PerMonth',
            icon: 'user',
            to: '/app/reports-manager/monthly',
          },
          {
            label: 'Reports PerYear',
            icon: 'users',
            to: '/app/reports-manager/annual',
          },
        ],
      },
    ],
  },

  {
    section: 'System',
    items: [
      {
        label: 'Profile',
        icon: 'circle-user',
        to: '/app/profile',
      },
      {
        label: 'Settings',
        icon: 'gear',
        to: '/app/settings',
      },
      {
        label: 'Table',
        icon: 'table',
        to: '/app/table',
      },
    ],
  },
]

/* ========================================
   HELPERS
======================================== */
function isActive(path) {
  return route.path === path
}

function isParentActive(children = []) {
  return children.some((child) =>
    route.path.startsWith(child.to)
  )
}
</script>

<template>
  <CSidebar
    position="fixed"
    :colorScheme="colorScheme"
    :visible="visible"
    :unfoldable="unfoldable"
    class="crm-sidebar"
    @visible-change="emit('update:visible', $event)"
  >
    <!-- ========================================
         BRAND
    ========================================= -->
    <CSidebarBrand class="crm-brand">

      <!-- OPTIONAL IMAGE LOGO -->
      <!-- <img
        src="/logo.png"
        alt="Logo"
        class="brand-logo"
        @error="$event.target.style.display = 'none'"
      /> -->

      <!-- ICON -->
      <font-awesome-icon
        :icon="['fas', 'chart-line']"
        class="brand-icon"
      />

      <!-- TEXT -->
      <span class="brand-text">
        PT SATU DUA
      </span>
    </CSidebarBrand>

    <!-- ========================================
         NAVIGATION
    ========================================= -->
    <CSidebarNav class="crm-nav">

      <template
        v-for="section in menus"
        :key="section.section"
      >

        <!-- SECTION TITLE -->
        <div class="nav-section-title">
          {{ section.section }}
        </div>

        <!-- ITEMS -->
        <template
          v-for="item in section.items"
          :key="item.key || item.to"
        >

          <!-- ========================================
               GROUP MENU
          ========================================= -->
          <CNavGroup
            v-if="item.children"
            :visible="isParentActive(item.children)"
            class="crm-nav-group"
          >
            <!-- TOGGLER -->
            <template #togglerContent>
              <div
                class="nav-item nav-item-parent"
                :class="{
                  'parent-active':
                    isParentActive(item.children)
                }"
              >
                <span class="nav-item-icon">
                  <font-awesome-icon
                    :icon="['fas', item.icon]"
                  />
                </span>

                <span class="nav-item-label">
                  {{ item.label }}
                </span>
              </div>
            </template>

            <!-- CHILDREN -->
            <RouterLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              custom
              v-slot="{ navigate, href }"
            >
              <a
                :href="href"
                @click="navigate"
                class="nav-item nav-item-child"
                :class="{
                  active: isActive(child.to)
                }"
              >
                <span class="nav-item-icon child-icon">
                  <font-awesome-icon
                    :icon="['fas', child.icon]"
                  />
                </span>

                <span class="nav-item-label">
                  {{ child.label }}
                </span>
              </a>
            </RouterLink>
          </CNavGroup>

          <!-- ========================================
               SINGLE MENU
          ========================================= -->
          <RouterLink
            v-else
            :to="item.to"
            custom
            v-slot="{ navigate, href }"
          >
            <a
              :href="href"
              @click="navigate"
              class="nav-item"
              :class="{
                active: isActive(item.to)
              }"
            >
              <span class="nav-item-icon">
                <font-awesome-icon
                  :icon="['fas', item.icon]"
                />
              </span>

              <span class="nav-item-label">
                {{ item.label }}
              </span>
            </a>
          </RouterLink>

        </template>
      </template>
    </CSidebarNav>

    <!-- ========================================
         FOOTER
    ========================================= -->
    <div class="sidebar-footer">

      <div class="user-avatar">
        AD
      </div>

      <div class="user-info">
        <div class="user-name">
          Admin
        </div>

        <div class="user-role">
          Super Admin
        </div>
      </div>

      <button
        class="logout-btn"
        title="Logout"
      >
        <font-awesome-icon
          :icon="['fas', 'right-from-bracket']"
        />
      </button>

    </div>
  </CSidebar>
</template>

<style scoped>
/* ========================================
   SIDEBAR
======================================== */
.crm-sidebar {
  width: 240px !important;
  background: var(--bg-sidebar) !important;
  border-right: 1px solid var(--border-sidebar) !important;
  display: flex !important;
  flex-direction: column !important;
  z-index: 1031 !important;
}

:deep(.sidebar-toggler),
:deep(.c-sidebar-toggler) {
  display: none !important;
}

/* ========================================
   BRAND
======================================== */
.crm-brand {
  padding: 0 20px !important;
  display: flex !important;
  align-items: center !important;
  gap: 12px;
  border-bottom: 1px solid var(--border-sidebar) !important;
  min-height: 64px;
  flex-shrink: 0;
}

.brand-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
}

.brand-icon {
  font-size: 1.2rem;
  color: #6366f1;
  flex-shrink: 0;
}

.brand-text {
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text-sidebar);
  white-space: nowrap;
}

/* ========================================
   NAVIGATION
======================================== */
.crm-nav {
  padding: 8px 12px !important;
  flex: 1 !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  min-height: 0;
}

.nav-section-title {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: var(--text-section-title);
  padding: 18px 8px 6px;
  text-transform: uppercase;
  user-select: none;
}

/* ========================================
   NAV ITEM
======================================== */
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 2px;
  cursor: pointer;
  color: var(--text-sidebar);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.18s ease;
  border-left: 3px solid transparent;
  user-select: none;
  text-decoration: none;
}

.nav-item:hover {
  background: var(--bg-nav-hover);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--bg-nav-active);
  color: var(--text-sidebar-active);
  font-weight: 600;
  border-left: 3px solid #6366f1;
}

.nav-item.active .nav-item-icon {
  color: var(--text-sidebar-active);
}

.nav-item-label {
  flex: 1;
}

/* ========================================
   PARENT
======================================== */
.nav-item-parent.parent-active {
  color: var(--text-primary);
  font-weight: 600;
}

/* ========================================
   CHILD
======================================== */
.nav-item-child {
  padding-left: 20px;
  margin-left: 12px;
  border-left: 1px solid
    var(--border-sidebar);
  border-radius: 0 8px 8px 0;
  font-size: 0.84rem;
}

.nav-item-child:hover {
  border-left-color:
    rgba(99, 102, 241, 0.4);
}

.nav-item-child.active {
  border-left: 1px solid #6366f1;
}

/* ========================================
   ICON
======================================== */
.nav-item-icon {
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.child-icon {
  font-size: 0.78rem !important;
  opacity: 0.7;
}

/* ========================================
   FOOTER
======================================== */
.sidebar-footer {
  padding: 14px 16px;
  border-top: 1px solid var(--border-sidebar);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.user-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #818cf8
    );
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  overflow: hidden;
}

.user-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-sidebar);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 0.7rem;
  color: var(--text-section-title);
  margin-top: 1px;
}

.logout-btn {
  background: none;
  border: none;
  color: var(--text-section-title);
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.18s ease;
  flex-shrink: 0;
}

.logout-btn:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

/* ========================================
   COREUI FIX
======================================== */
:deep(.nav-group-toggle) {
  padding: 0 !important;
  background: transparent !important;
}

:deep(.nav-group-toggle::after) {
  margin-right: 12px;
}

:deep(.nav-group.show .nav-group-toggle::after) {
  transform: rotate(90deg);
}

:deep(.nav-group-items) {
  margin-top: 2px;
}
</style>