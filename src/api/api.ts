import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const API = {
    getUsers: async () => {
        const response = await instance.get<ResponseType>('users?per_page=12');
        return response.data
    }
}

//types
type ResponseType = {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: DataType,
    support: SupportType
}
export type DataType = Array<UserType>

export type UserType = {
    id?: number | string,
    first_name: string,
    last_name: string,
    email?: string,
    avatar?: string
}

type SupportType = {
    url: string,
    text: string
}