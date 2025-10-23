<template>
    <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form action="" class="space-y-4 mx-auto">
        <div>
            <label for="">Username</label>
            <input type="text" v-model="general.username">
        </div>
        <div>
            <label for="">Email</label>
            <input type="email" v-model="general.email">
        </div>
        <div>
            <label for="">About Me</label>
            <textarea name="" id=""  v-model="general.about"></textarea>
        </div>
        <div>
            <label for="">Gender</label>
            <label for="">
                <input type="radio" value="male" v-model="general.gender">
                <span>Male</span>
            </label>
            <label for="">
                <input type="radio" value="female" v-model="general.gender" >
                <span>Female</span>
            </label>
            <label for="">
                <input type="radio" value="other" v-model="general.gender">
                <span>Other</span>
            </label>
        </div>
        <div>
            <label for="">Country</label>
            <select name="" id="" v-model="general.country">
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
            </select>
        </div>
        <button type="submit" class="btn-primary">Save</button>
    </form>
    </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import {ref} from 'vue'

const {general} = useSettings();
const thisWillAlwaysBe0 = ref(0)
console.log(general)


</script>
