<template>
 <div class="form-group">
  <div class="input-group">
   <input v-model="newTodo" placeholder="Tambahkan tugas baru" class="form-control" />
   <button type="button" @click="addTodo" class="btn btn-primary mt-2">{{ editing !== null ? 'Edit' : 'Tambah' }}</button>
  </div>
  <p v-if="todos.length >= 5">Hebat!</p>
 </div>
</template>

<script>
export default {
 name: 'InputField',
 computed: {
  newTodo: {
   get() {
    return this.$store.state.todos.newTodo;
   },
   set(value) {
    this.$store.commit('todos/setNewTodo', value);
   },
  },
  editing: {
   get() {
    return this.$store.state.todos.editing;
   },
   set(index) {
    this.$store.commit('todos/setEditing', index);
   },
  },
  todos() {
   return this.$store.state.todos.todos;
  },
 },
 methods: {
  addTodo() {
   if (this.newTodo.trim() !== '') {
    if (this.editing !== null) {
     this.$store.commit('todos/updateTodo', { index: this.editing, value: this.newTodo });
     this.editing = null;
    } else {
     this.$store.commit('todos/addTodo', this.newTodo);
    }
    this.$store.commit('todos/setNewTodo', '');
   }
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
</style>
