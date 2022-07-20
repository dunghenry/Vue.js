import { createStore } from "vuex";
import todoStore from "./modules/todoStore";
const store = createStore({
    modules: {
        todosStore: todoStore
    }
})

export default store;