<template>
    <div>
     <label>
       Blog Title : 
     </label>
     <input id="blogTitle" v-model="blog.title" />

     <vue-editor v-model="content"></vue-editor>
     <div>
       <button v-on:click="SaveBlog()">Save</button>
     </div>
    </div>
</template>


<script>
import { VueEditor } from 'vue2-editor'
//import { async } from 'q';
import { repoFactory } from './../RepoFactory.js'
//import Router from './../router.js'

const blogrepo = repoFactory.get('blogsapi')

export default {
   name: 'blogdetails',
   components: {
      VueEditor
   },

   data() {
       return {
         content: '',
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
      this.content = data.blogdetails
      },
      SaveBlog(){
          this.blog.blogdetails = this.content
          blogrepo.postBlog(this.blog)
          alert('Blog Saved!')
      }
     }
   }
</script>