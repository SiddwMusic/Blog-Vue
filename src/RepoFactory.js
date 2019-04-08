import BlogRepo from './BlogRepository'

const repo = {
    blogsapi : BlogRepo
};

export const repoFactory = {
    get : name => repo[name]
};