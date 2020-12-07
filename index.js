const app = new Vue({
    el: "#app",
    data: {
        newTodo: '',
        newTodo2: '',
        newTodo3: '',
        error: '',
        todos: [],
        editTodo: null,
        editIndex: -1
    },
    methods: {
        addNewTodo() {
            if ( (this.newTodo.length > 0)  && (this.newTodo3.length > 0) ){
                this.todos.push({
                    name: this.newTodo,
                    description: this.newTodo2,
                    cash: this.newTodo3,
                });
                this.newTodo = '';
                this.newTodo2 = '';
                this.newTodo3 = '';
                this.error = '';
            } else {
                this.error = 'Campos requeridos';
            }
        },
        editTask(index) {
            this.editTodo = { ...this.todos[index] };
            this.editIndex = index;
        },
        saveTask(status) {
            if (status) {
                this.todos[this.editIndex].name = this.editTodo.name;
                this.todos[this.editIndex].description = this.editTodo.description;
                this.todos[this.editIndex].cash = this.editTodo.cash;
            }
            this.editTodo = null;
            this.editIndex = -1;
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    },
})