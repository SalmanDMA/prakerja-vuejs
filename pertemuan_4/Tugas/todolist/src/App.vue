<template>
 <div id="app" class="container">
  <h1>Todo List</h1>
  <ListTodo :todos="todos" @deleteTodo="deleteTodo" @editTodo="startEdit" />
  <InputField :todos="todos" ref="inputField" @addTodo="addTodo" @updateTodo="updateTodo" />
 </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ListTodo from '@/components/ListTodo.vue';

export default {
 name: 'App',
 components: {
  InputField,
  ListTodo,
 },
 data() {
  return {
   todos: [],
  };
 },
 methods: {
  addTodo(newTodo) {
   this.todos.push(newTodo);
  },
  deleteTodo(index) {
   this.todos.splice(index, 1);
  },
  startEdit(index) {
   this.$refs.inputField.editing = index;
   this.$refs.inputField.newTodo = this.todos[index];
  },
  updateTodo({ index, value }) {
   if (index !== null) {
    this.todos = this.todos.map((todo, i) => {
     if (i === index) {
      return value;
     }
     return todo;
    });
   }
   this.$refs.inputField.editing = null;
   this.$refs.inputField.newTodo = '';
  },
 },
};
</script>

<style>
.container {
 padding: 10px;
}

div.form-group {
 display: flex;
 flex-direction: column;
 gap: 10px;
}

div.input-group {
 display: flex;
 gap: 10px;
}

input.form-control {
 width: 100%;
 padding: 10px 20px;
}

button {
 cursor: pointer;
}

button.btn {
 padding: 10px 20px;
}

ul.list-group {
 list-style: none;
 padding: 0;
}

li.list-group-item {
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 10px 0;
}

li.list-group-item:hover {
 background-color: #f0f0f0;
}

button.btn-warning {
 background-color: #f0a500;
 color: #fff;
}

button.btn-danger {
 background-color: #d9534f;
 color: #fff;
}

h1 {
 font-size: 24px;
 margin-bottom: 20px;
}
</style>
