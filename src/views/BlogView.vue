<template>
    <div>
        <div>
            <h5>{{blog.title}}</h5>
        </div>
        <div>
            <span v-html="blog.blogdetails"></span>
        </div>
    </div>
</template>

<script>
import { repoFactory } from './../RepoFactory.js'
//import Router from './../router.js'

const blogrepo = repoFactory.get('blogsapi')

export default {
    name: 'BlogView',
    data(){
        return{
            blog : []
        }
    },
    created(){
        var id = this.$route.params.id
        this.getblog(id)
    },
    methods: {
        async getblog(id){
      const { data } = await blogrepo.getblog(id)
      this.blog = data
      }
    }
}
</script>
