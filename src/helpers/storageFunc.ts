import { StoredUserLikes } from '../interfaces/StoredUsersLikes';
const LOCAL_STORAGE_KEY = '__PEXELS_LIKES__';

export function saveLikes(likes: StoredUserLikes) {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(likes));
}

export function loadLikes(): StoredUserLikes | null {
    const data = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!data) {
        return null
    }
    return JSON.parse(data);
}