<!-- <template>
  <router-view />
</template> -->

<script setup>
import { useConfirm } from '@/composables/useConfirm'
import AppConfirm from '@/components/AppConfirm.vue'

const { state, onConfirm, onCancel } = useConfirm()
</script>

<template>
  <router-view />

  <!-- Global Confirm Dialog -->
  <AppConfirm
    :show="state.show"
    :type="state.type"
    :title="state.title"
    :message="state.message"
    :detail="state.detail"
    :confirm-text="state.confirmText"
    :cancel-text="state.cancelText"
    :loading="state.loading"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>