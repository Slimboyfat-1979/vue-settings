import {ref, watch} from 'vue';
type visibility = 'public' | 'private';
interface SettingsMap {
    general: GeneralSettings,
    privacy: PrivacySettings,
    notifications: NotifcationSettings
}

type SettingsKey = keyof SettingsMap;

interface GeneralSettings {
    username: string,
    about: string,
    gender: string,
    country: string,
    email: string
}

interface NotifcationSettings {
    email: boolean,
    sms: boolean
}


interface PrivacySettings {
    visibility: visibility;
    searchEngineIndexing: boolean
}

const init = <T extends SettingsKey>(key: T, defaults: SettingsMap[T]) => {
    const stored = localStorage.getItem(key);
    return stored != null ? JSON.parse(stored) : defaults;
}

const watcher = <T extends SettingsKey>(key: T) => {
    return (value: SettingsMap[T]) => {
        localStorage.setItem(key, JSON.stringify(value));
    };
}

const general = ref<GeneralSettings>(init('general', {
    about: '',
    country: 'USA',
    gender: 'male',
    email: '',
    username: ''
}));

watch(general, watcher('general'), {deep: true});


const notifications = ref<NotifcationSettings>(init('notifications', {
    email: false,
    sms: false
}))

watch(notifications, watcher('notifications'), {deep: true})

const privacy = ref<PrivacySettings>(init('privacy', {
    visibility: 'public',
    searchEngineIndexing: false
}))

watch(privacy, watcher('privacy'), {deep: true})


export function useSettings() {
    return {
        general,
        notifications,
        privacy
    }
}