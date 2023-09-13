<template>
 <div>
  <ul class="list-group">
   <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
    <span @click="redirectToDetail(index)">
     {{ `${index + 1}. ${todo.title} ` }}
    </span>
    <div>
     <button type="button" @click="editTodo(index)" class="btn btn-warning mr-2">Edit</button>
     <button type="button" @click="deleteTodo(index)" class="btn btn-danger">Hapus</button>
    </div>
   </li>
  </ul>
 </div>
</template>

<script>
export default {
 name: 'ListTodo',
 computed: {
  todos() {
   return this.$store.state.todos.todos;
  },
 },
 methods: {
  deleteTodo(index) {
   this.$store.commit('todos/deleteTodo', index);
  },
  editTodo(index) {
   this.$store.commit('todos/startEdit', index);
  },
  redirectToDetail(index) {
   this.$router.push({ name: 'TodoDetail', params: { id: index } });
  },
 },
};
</script>

<style scoped>
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

li.list-group-item span {
 cursor: pointer;
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
</style>
