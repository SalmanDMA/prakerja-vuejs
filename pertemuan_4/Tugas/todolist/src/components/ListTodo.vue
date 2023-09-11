<template>
 <div>
  <ul class="list-group">
   <li v-for="(todo, index) in todos" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
    {{ `${index + 1}. ${todo} ` }}
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
 props: ['todos'],
 methods: {
  deleteTodo(index) {
   this.$emit('deleteTodo', index);
  },
  editTodo(index) {
   this.$emit('editTodo', index);
  },
 },
};
</script>
