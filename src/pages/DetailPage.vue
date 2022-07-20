<template>
    <h1>Detail Page</h1>
    <p v-if="todo.id">{{JSON.stringify(todo)}}</p>
    <p v-else>Loading</p>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
export default {
    name: "DetailPage",
    setup(){
        const todo = ref({});
        const route = useRoute();
        onBeforeMount(async() =>{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`);
            todo.value = res.data
        });
        return{
            todo
        }
    }
}
</script>

<style>

</style>