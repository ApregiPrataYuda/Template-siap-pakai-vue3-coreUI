<script setup>
import {
  CRow, CCol, CCard, CCardBody, CCardHeader,
} from '@coreui/vue'

const stats = [
  { label: 'Total Leads', value: '128', icon: 'user', color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { label: 'Active Customers', value: '64', icon: 'users', color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
  { label: 'Revenue', value: 'Rp 48jt', icon: 'chart-line', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { label: 'Follow-up Pending', value: '12', icon: 'bell', color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
]

const recentLeads = [
  { id: 1, name: 'Budi Santoso Surya', email: 'budi@mail.com', status: 'New', statusClass: 'badge-new' },
  { id: 2, name: 'Siti Rahayu', email: 'siti@mail.com', status: 'Contacted', statusClass: 'badge-contacted' },
  { id: 3, name: 'Andi Wijaya', email: 'andi@mail.com', status: 'Qualified', statusClass: 'badge-qualified' },
  { id: 4, name: 'Dewi Kusuma', email: 'dewi@mail.com', status: 'Lost', statusClass: 'badge-lost' },
]

const pipeline = [
  { label: 'New Lead', value: 80, color: '#6366f1' },
  { label: 'Contacted', value: 60, color: '#38bdf8' },
  { label: 'Qualified', value: 45, color: '#f59e0b' },
  { label: 'Closed Won', value: 30, color: '#22c55e' },
]
</script>

<template>
  <div class="dashboard">

    <!-- Stat Cards -->
    <CRow class="mb-4 g-3">
      <CCol sm="6" xl="3" v-for="stat in stats" :key="stat.label">
        <div class="stat-card">
          <div class="stat-icon" :style="{ background: stat.bg, color: stat.color }">
            <font-awesome-icon :icon="stat.icon" />
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </CCol>
    </CRow>

    <CRow class="g-3">

      <!-- Recent Leads Table -->
      <CCol md="7">
        <CCard class="h-100 border-0 shadow-sm">
          <CCardHeader class="bg-white border-bottom d-flex align-items-center gap-2 py-3">
            <font-awesome-icon icon="user" class="text-primary" />
            <span class="fw-semibold">Recent Leads</span>
          </CCardHeader>
          <CCardBody class="p-0">
            <table class="table table-hover mb-0">
              <thead class="table-light">
                <tr>
                  <th class="px-4 py-3">Nama</th>
                  <th class="py-3">Email</th>
                  <th class="py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="lead in recentLeads" :key="lead.id">
                  <td class="px-4 py-3 fw-medium">{{ lead.name }}</td>
                  <td class="py-3 text-muted">{{ lead.email }}</td>
                  <td class="py-3">
                    <span class="status-badge" :class="lead.statusClass">
                      {{ lead.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>

      <!-- Pipeline -->
      <CCol md="5">
        <CCard class="h-100 border-0 shadow-sm">
          <CCardHeader class="bg-white border-bottom d-flex align-items-center gap-2 py-3">
            <font-awesome-icon icon="chart-line" class="text-warning" />
            <span class="fw-semibold">Pipeline Stage</span>
          </CCardHeader>
          <CCardBody class="py-4 px-4">
            <div v-for="stage in pipeline" :key="stage.label" class="mb-4">
              <div class="d-flex justify-content-between mb-2">
                <span class="fw-medium text-dark">{{ stage.label }}</span>
                <span class="text-muted">{{ stage.value }}%</span>
              </div>
              <div class="progress-track">
                <div
                  class="progress-fill"
                  :style="{ width: stage.value + '%', background: stage.color }"
                />
              </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 4px 0;
}

/* Stat Card */
.stat-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}
.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f1117;
  line-height: 1;
  margin-bottom: 4px;
}
.stat-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

/* Status Badge */
.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
}
.badge-new       { background: rgba(99,102,241,0.1); color: #6366f1; }
.badge-contacted { background: rgba(245,158,11,0.1); color: #d97706; }
.badge-qualified { background: rgba(34,197,94,0.1);  color: #16a34a; }
.badge-lost      { background: rgba(239,68,68,0.1);  color: #dc2626; }

/* Progress */
.progress-track {
  height: 8px;
  background: #f1f5f9;
  border-radius: 99px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 99px;
  transition: width 0.6s ease;
}
</style>