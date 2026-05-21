<script setup>
import { CFooter } from '@coreui/vue'
</script>

<template>
  <CFooter class="crm-footer">
    <div class="footer-inner">

      <div class="footer-left">
        <span class="footer-brand">
          <font-awesome-icon icon="gem" class="me-2" />
          PT SATU DUA
        </span>
        <span class="footer-divider">·</span>
        <span class="footer-copy">© {{ new Date().getFullYear() }} All rights reserved</span>
      </div>

      <div class="footer-right">
        <span class="footer-version">v1.0.0</span>
        <span class="footer-divider">·</span>
        <span class="footer-status">
          <span class="status-dot" />
          System Online
        </span>
      </div>

    </div>
  </CFooter>
</template>

<style scoped>
.crm-footer {
  background: #fff !important;
  border-top: 1px solid #e5e7eb !important;
  padding: 0 !important;
  min-height: 48px;
}

.footer-inner {
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-left,
.footer-right {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #6b7280;
}

.footer-brand {
  font-weight: 700;
  color: #0f1117;
  font-size: 0.85rem;
}

.footer-divider {
  color: #d1d5db;
}

.footer-copy {
  color: #9ca3af;
}

.footer-version {
  background: #f3f4f6;
  color: #6b7280;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 99px;
}

.footer-status {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 500;
  color: #6366f1;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
</style>