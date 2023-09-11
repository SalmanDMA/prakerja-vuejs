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
 data() {
  return {
   newTodo: '',
   editing: null,
  };
 },
 props: ['todos'],
 methods: {
  addTodo() {
   if (this.newTodo.trim() !== '') {
    if (this.editing !== null) {
     this.$emit('updateTodo', { index: this.editing, value: this.newTodo });
     this.editing = null;
    } else {
     this.$emit('addTodo', this.newTodo);
    }
    this.newTodo = '';
   }
  },
 },
};
</script>
