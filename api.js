import axios from 'axios';

const api = axios.create({
    baseURL: 'https://moderationapi.com/api/v1/moderation/text'
})

export default api;