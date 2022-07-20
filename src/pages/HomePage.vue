<template>
  <h1>Home Page</h1>
  <p>{{JSON.stringify(todos)}}</p>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    name: 'HomePage',

    // computed:{
    //   todos(){
    //     return this.$store.state.todosStore.todos
    //   }
    // }

    // computed: mapState({
    //   todos: state => state.todosStore.todos
    // }),

  computed: {...mapGetters(['todos'])},
  created() {
    this.getTodos();
  },
  methods: {...mapActions(['getTodos'])},
}
</script>

<style>

</style>