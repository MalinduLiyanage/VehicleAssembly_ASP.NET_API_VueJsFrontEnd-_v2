import axios from 'axios';
import { useAuthStore } from '@/datastore/store';

const apiClient = axios.create({
    baseURL: 'http://localhost:5290/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const authStore = useAuthStore();
        const token = authStore.getToken();

        if ((token && config.url !== '/AdminLogin') || (token && config.url === '/Admin' && config.method === 'post')) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error("API Error:", error.response || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
