import './config/axiosConfig'
import {api} from "./config/axiosConfig";
import {BLOG_GET_POSTS_URI} from "./config/urlConfig";

type GetPostsRequestType = {
    author?: number
    lesson_num?: number
    limit?: number
    offset?: number
    ordering?: 'id' | 'image' | 'date' | 'lesson_num' | 'title' | 'author'
    searchTerm?: string
}

type GetPostsResponseType = {
    id: number
    image?: string
    text?: string
    date: string
    lesson_num: number
    title: string
    author: number
}

class BlogAPI {
    static getPosts = async (params?: GetPostsRequestType): Promise<Array<GetPostsResponseType>> => {
        const response = await api.request({
            method: 'get',
            url: BLOG_GET_POSTS_URI,
            params: params
        })
        
        return response.data;
    }
}


export {BlogAPI}