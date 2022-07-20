<template>
  <h1>About Page</h1>
  <p>{{JSON.stringify(todos)}}</p>
  <p>{{JSON.stringify(users)}}</p>
  <button @click="add">Add todo</button>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AboutPage',
  data(){
    return{
      todos:[
        {
          id: 1,
          title: 'Công việc 1'
        }
      ],
      users:[]
    }
  },
  methods: {
    add(){
      this.todos.push({id: 2, title: 'Công việc 2'});
    },
    async getData(){
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=5")
        if(res.data){
          this.users = res.data
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  //execute after component mounted
  mounted(){
    
  },
  created(){
    this.getData();
  }
}
</script>

<style>

</style>