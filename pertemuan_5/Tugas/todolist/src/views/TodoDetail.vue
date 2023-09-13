<template>
 <div class="container">
  <button type="button" @click="buttonBack" class="btn-back">Kembali</button>
  <h1>Detail Todo</h1>
  <p>{{ todo.title }}</p>
  <p v-if="!isEditing">{{ textDescription }}</p>
  <div>
   <textarea v-if="isEditing" v-model="description" class="description-input"></textarea>
   <button v-if="!isEditing" @click="startEditing" class="btn-edit">Ubah Deskripsi</button>
   <button v-else @click="saveDescription" class="btn-save">Simpan</button>
  </div>
 </div>
</template>

<script>
export default {
 name: 'TodoDetail',
 data() {
  return {
   isEditing: false,
  };
 },
 computed: {
  description: {
   get() {
    const id = this.$route.params.id;
    return this.$store.state.todos.todos[id].description;
   },
   set(value) {
    const id = this.$route.params.id;
    return this.$store.commit('todos/setDescription', { index: id, description: value });
   },
  },
  todo() {
   const id = this.$route.params.id;
   return this.$store.state.todos.todos[id];
  },
  textDescription() {
   if (!this.description) {
    return 'Belum ada deskripsi nih...';
   }
   return this.description;
  },
 },
 methods: {
  buttonBack() {
   this.$router.back();
  },
  startEditing() {
   this.isEditing = true;
   this.description = this.textDescription;
  },
  saveDescription() {
   const id = this.$route.params.id;
   this.$store.commit('todos/updateDescription', { index: id, description: this.description });
   this.isEditing = false;
  },
 },
};
</script>

<style scoped>
.container {
 padding: 20px;
 max-width: 600px;
 margin: 0 auto;
}

.btn-back {
 margin-bottom: 20px;
 background-color: #333;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 16px;
}

.btn-back:hover {
 background-color: #555;
}

h1 {
 font-size: 24px;
 margin-bottom: 20px;
}

p {
 font-size: 16px;
}

.description-input {
 width: 100%;
 height: 150px;
 resize: vertical;
 margin-top: 20px;
 padding: 10px;
 font-size: 16px;
}

.btn-edit,
.btn-save {
 margin-top: 20px;
 background-color: #2ecc71;
 color: white;
 border: none;
 padding: 10px 20px;
 cursor: pointer;
 font-size: 16px;
}

.btn-edit:hover,
.btn-save:hover {
 background-color: #27ae60;
}
</style>
