import axiosrepo from './AxiosRepo'

const resources = '/Blog'

export default{
    get(){
        return axiosrepo.get(`${resources}`)
    },
    getblog(id){
        return axiosrepo.get(`${resources}/${id}`)
    },
    postBlog(blog){
        return axiosrepo.post(`${resources}`, blog)
    }

}

