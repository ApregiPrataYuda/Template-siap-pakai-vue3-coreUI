<script setup>
import { ref } from 'vue'

const isEditing = ref(false)

const profile = ref({
  name: 'Admin',
  role: 'Super Admin',
  email: 'admin@ptsatudua.com',
  phone: '081234567890',
  department: 'Management',
  location: 'Jakarta, Indonesia',
  joinDate: '1 Januari 2024',
  avatar: 'AD',
})

const form = ref({ ...profile.value })

function startEdit() {
  form.value = { ...profile.value }
  isEditing.value = true
}

function cancelEdit() {
  isEditing.value = false
}

function saveEdit() {
  profile.value = { ...form.value }
  isEditing.value = false
}

const stats = [
  { label: 'Total Leads',     value: '128', icon: 'user',       color: '#6366f1', bg: 'rgba(99,102,241,0.1)' },
  { label: 'Customers',       value: '64',  icon: 'users',      color: '#22c55e', bg: 'rgba(34,197,94,0.1)' },
  { label: 'Reports Dibuat',  value: '32',  icon: 'file-lines', color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  { label: 'Task Selesai',    value: '97%', icon: 'chart-line',  color: '#38bdf8', bg: 'rgba(56,189,248,0.1)' },
]

const activities = [
  { action: 'Menambah lead baru',       time: '2 menit lalu',   icon: 'user-plus',  color: '#6366f1' },
  { action: 'Update data customer',     time: '1 jam lalu',     icon: 'pen',        color: '#22c55e' },
  { action: 'Upload report bulanan',    time: '3 jam lalu',     icon: 'file-lines', color: '#f59e0b' },
  { action: 'Login ke sistem',          time: '5 jam lalu',     icon: 'right-to-bracket', color: '#38bdf8' },
  { action: 'Hapus lead tidak aktif',   time: 'Kemarin',        icon: 'trash',      color: '#ef4444' },
]
</script>

<template>
  <div class="profile-page">

    <div class="profile-grid">

      <!-- LEFT: Profile Card -->
      <div class="profile-left">

        <!-- Avatar & Info -->
        <div class="profile-card">
          <div class="profile-cover" />
          <div class="profile-body">
            <div class="profile-avatar">{{ profile.avatar }}</div>
            <div class="profile-name">{{ profile.name }}</div>
            <div class="profile-role">{{ profile.role }}</div>

            <div class="profile-tags">
              <span class="tag tag-green">
                <font-awesome-icon icon="circle" style="font-size:0.5rem" />
                Online
              </span>
              <span class="tag tag-purple">{{ profile.department }}</span>
            </div>

            <div class="profile-meta">
              <div class="meta-item">
                <font-awesome-icon icon="envelope" class="meta-icon" />
                {{ profile.email }}
              </div>
              <div class="meta-item">
                <font-awesome-icon icon="phone" class="meta-icon" />
                {{ profile.phone }}
              </div>
              <div class="meta-item">
                <font-awesome-icon icon="location-dot" class="meta-icon" />
                {{ profile.location }}
              </div>
              <div class="meta-item">
                <font-awesome-icon icon="calendar" class="meta-icon" />
                Bergabung {{ profile.joinDate }}
              </div>
            </div>

            <button class="btn-edit-profile" @click="startEdit">
              <font-awesome-icon icon="pen" />
              Edit Profile
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="stats-card">
          <div class="card-title">Statistik</div>
          <div class="stats-grid">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-icon" :style="{ background: stat.bg, color: stat.color }">
                <font-awesome-icon :icon="stat.icon" />
              </div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>

      </div>

      <!-- RIGHT: Detail & Activity -->
      <div class="profile-right">

        <!-- Edit Form -->
        <div v-if="isEditing" class="detail-card">
          <div class="card-title">
            <font-awesome-icon icon="pen" />
            Edit Profile
          </div>

          <div class="form-grid">
            <div class="form-group">
              <label>Nama Lengkap</label>
              <input v-model="form.name" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label>Role</label>
              <input v-model="form.role" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="form.email" type="email" class="form-input" />
            </div>
            <div class="form-group">
              <label>No. Telepon</label>
              <input v-model="form.phone" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label>Departemen</label>
              <input v-model="form.department" type="text" class="form-input" />
            </div>
            <div class="form-group">
              <label>Lokasi</label>
              <input v-model="form.location" type="text" class="form-input" />
            </div>
          </div>

          <div class="form-actions">
            <button class="btn-cancel" @click="cancelEdit">Batal</button>
            <button class="btn-save" @click="saveEdit">
              <font-awesome-icon icon="check" />
              Simpan
            </button>
          </div>
        </div>

        <!-- Info Detail -->
        <div v-else class="detail-card">
          <div class="card-title">
            <font-awesome-icon icon="circle-info" />
            Informasi Akun
          </div>

          <div class="info-list">
            <div class="info-row">
              <span class="info-label">Nama Lengkap</span>
              <span class="info-value">{{ profile.name }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Role</span>
              <span class="info-value">{{ profile.role }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Email</span>
              <span class="info-value">{{ profile.email }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">No. Telepon</span>
              <span class="info-value">{{ profile.phone }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Departemen</span>
              <span class="info-value">{{ profile.department }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Lokasi</span>
              <span class="info-value">{{ profile.location }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Tanggal Bergabung</span>
              <span class="info-value">{{ profile.joinDate }}</span>
            </div>
            <div class="info-row">
              <span class="info-label">Status Akun</span>
              <span class="badge-active">Aktif</span>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="detail-card">
          <div class="card-title">
            <font-awesome-icon icon="clock-rotate-left" />
            Aktivitas Terbaru
          </div>

          <div class="activity-list">
            <div
              v-for="(act, index) in activities"
              :key="index"
              class="activity-item"
            >
              <div class="activity-icon" :style="{ background: act.color + '20', color: act.color }">
                <font-awesome-icon :icon="act.icon" />
              </div>
              <div class="activity-info">
                <div class="activity-action">{{ act.action }}</div>
                <div class="activity-time">{{ act.time }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  padding: 4px 0;
}

/* ===== GRID ===== */
.profile-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  align-items: start;
}
@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}

.profile-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.profile-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* ===== CARD BASE ===== */
.profile-card,
.stats-card,
.detail-card {
  background: var(--bg-card);
  border-radius: 12px;
  box-shadow: 0 1px 3px var(--shadow-color);
  overflow: hidden;
}

/* ===== PROFILE CARD ===== */
.profile-cover {
  height: 80px;
  background: linear-gradient(135deg, #6366f1, #818cf8);
}
.profile-body {
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.profile-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #818cf8);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--bg-card);
  margin-top: -36px;
  flex-shrink: 0;
}
.profile-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-top: 10px;
}
.profile-role {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-top: 2px;
}
.profile-tags {
  display: flex;
  gap: 6px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.tag-green  { background: rgba(34,197,94,0.1);  color: #16a34a; }
.tag-purple { background: rgba(99,102,241,0.1); color: #6366f1; }

.profile-meta {
  width: 100%;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.82rem;
  color: var(--text-muted);
}
.meta-icon {
  width: 14px;
  color: #6366f1;
  flex-shrink: 0;
}

.btn-edit-profile {
  margin-top: 16px;
  width: 100%;
  padding: 9px;
  background: rgba(99,102,241,0.1);
  color: #6366f1;
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.18s ease;
}
.btn-edit-profile:hover {
  background: #6366f1;
  color: #fff;
}

/* ===== STATS ===== */
.stats-card {
  padding: 16px 20px;
}
.card-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.card-title svg {
  color: #6366f1;
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.stat-item {
  background: var(--bg-main);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}
.stat-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
}
.stat-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
}
.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
}

/* ===== DETAIL CARD ===== */
.detail-card {
  padding: 20px;
}

/* Info list */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid var(--border-main);
  gap: 16px;
}
.info-row:last-child { border-bottom: none; }
.info-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-weight: 500;
  flex-shrink: 0;
}
.info-value {
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
  text-align: right;
}
.badge-active {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 99px;
  background: rgba(34,197,94,0.1);
  color: #16a34a;
}

/* ===== FORM ===== */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-bottom: 20px;
}
@media (max-width: 500px) {
  .form-grid { grid-template-columns: 1fr; }
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.form-input {
  padding: 9px 12px;
  border: 1px solid var(--border-main);
  border-radius: 8px;
  font-size: 0.875rem;
  background: var(--bg-input);
  color: var(--text-primary);
  outline: none;
  transition: border 0.18s ease;
}
.form-input:focus {
  border-color: #6366f1;
}
.form-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}
.btn-cancel {
  padding: 9px 20px;
  background: var(--bg-main);
  color: var(--text-muted);
  border: 1px solid var(--border-main);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}
.btn-cancel:hover {
  background: var(--border-main);
}
.btn-save {
  padding: 9px 20px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  transition: background 0.18s ease;
}
.btn-save:hover { background: #4f46e5; }

/* ===== ACTIVITY ===== */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.activity-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  transition: background 0.15s ease;
}
.activity-item:hover {
  background: var(--bg-nav-hover);
}
.activity-icon {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  flex-shrink: 0;
}
.activity-info { flex: 1; }
.activity-action {
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--text-primary);
}
.activity-time {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 2px;
}
</style>