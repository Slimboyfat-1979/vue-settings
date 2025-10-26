<template>
  <div>
    <h2 class="text-2xl mb-4">Notifications</h2>
    <form action="" class="space-y-4 mx-auto" @submit.prevent="save">
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.email" />
        <label for="">Email</label>
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" v-model="notifications.sms" />
        <label for="">SMS</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>

<script setup type="ts">
import { useSettings } from '@/composables/useSettings';
import {useNotifications} from '@/composables/useNotifications'
const {notifications} = useSettings();
const {addNotifications} = useNotifications();

const save = () => {
    addNotifications('Notifications settings were succesfully saved');
}


</script>
