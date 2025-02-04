import axios from 'axios'

const request = axios.create({
    baseURL: "https://picsum.photos"
})

export const api = {
    getList: async (id) => {
        const req = await request('/v2/list')
        return req.data
    }
}