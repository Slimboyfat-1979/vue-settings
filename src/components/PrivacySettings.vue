<template>
    <div>
        <h2 class="text-2xl mb-4">Privacy</h2>
            <form action="" class="space-y-4 mx-auto" @submit.prevent="save()">
        <div class="flex items-center gap-1">
            <input type="checkbox" v-model="privacy.searchEngineIndexing">
            <label for="">Search Engine Indexing</label>
        </div>
        <div>
            <label class="mb-1" for="">Visibility</label>
            <select name="" id="" v-model="privacy.visibility">
                <option value="private">Private</option>
                <option value="public">Public</option>
            </select>
        </div>
        <button type="submit" class="btn-primary">Save</button>
    </form>
    </div>
</template>

<script setup lang="ts"">
import { useSettings } from '@/composables/useSettings';
import { useNotifications } from '@/composables/useNotifications';
const {privacy} = useSettings();
const {addNotifications} = useNotifications();

const save = () => {
    addNotifications('Privacy settings were succesfully saved');
}
</script>