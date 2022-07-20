import axios from 'axios';
const todoStore = {
    state:{
        todos: [
            {
                id: 1,
                title: 'Công việc số 1'
            },
            {
                id: 2,
                title: 'Công việc số 2'
            },
        ]
    },
    getters: {
        todos(state) {
            return state.todos
        }
    },
    mutations: {
        GET_TODOS(state, data) {
            state.todos = data
        }
    },
    actions: {
        async getTodos(context) {
            try {
                const res = await axios("https://jsonplaceholder.typicode.com/todos");
                context.commit("GET_TODOS", res.data)
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default todoStore;