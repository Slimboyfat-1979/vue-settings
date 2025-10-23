import {ref} from 'vue';

interface generalSettings {
    username: string,
    about: string,
    gender: string,
    country: string,
    email: string
}

const general = ref<generalSettings>({
    about: '',
    country: 'USA',
    gender: 'male',
    email: '',
    username: ''
}); 

export function useSettings() {
    return {
        general
    }
}