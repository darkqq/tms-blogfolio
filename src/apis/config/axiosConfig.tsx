import axios from "axios"

export const api = axios.create({
    withCredentials: true,
    headers: {
        "Вот бы корс на серваке выключить": "*"
    },
    baseURL: "http://studapi.teachmeskills.by/",
})


const errorHandler = (error: any) => {
    const statusCode = error.response?.status

    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})
