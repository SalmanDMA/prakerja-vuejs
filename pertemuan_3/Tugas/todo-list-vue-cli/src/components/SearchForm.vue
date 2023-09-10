<template>
 <div>
  <form class="form" @submit.prevent="handleSubmitForm">
   <div class="form__group">
    <div class="form__control">
     <label class="form__label" for="form1">Enter a task here</label>
     <input v-model="newTask" type="text" id="form1" class="form__input" />
    </div>
   </div>

   <div>
    <button type="submit" class="btn btn-primary">Save</button>
   </div>
  </form>
  <p class="form__text" v-if="listTodos.length >= 4">Hebat!</p>
  <p class="form__error" v-if="error">{{ error }}</p>
 </div>
</template>

<script>
export default {
 data() {
  return {
   newTask: '',
   error: '',
  };
 },
 props: {
  handleSubmitTodos: {
   type: Function,
   required: true,
  },
  listTodos: {
   type: Array,
   required: true,
  },
 },
 methods: {
  handleSubmitForm() {
   const task = this.newTask.trim();

   if (task !== '') {
    this.handleSubmitTodos(task);
    this.newTask = '';
    this.error = '';
   }

   if (!task) {
    this.error = 'Task tidak boleh kosong';
   }
  },
 },
};
</script>

<style scoped>
.form {
 display: flex;
 align-items: end;
 width: 100%;
}

.form__group {
 width: 100%;
 margin-top: 10px;
}

.form__label {
 font-weight: bold;
}

.form__input {
 width: 100%;
 padding: 10px;
 border: 1px solid #ccc;
 border-radius: 5px 0 0 5px;
 margin-top: 5px;
}

.form__text {
 margin-top: 10px;
 font-size: 12px;
}

.form__error {
 margin-top: 10px;
 color: red;
 font-size: 12px;
}

.btn {
 padding: 10px 25px;
 border-radius: 0 5px 5px 0;
 cursor: pointer;
}

.btn-primary {
 border: 1px solid #007bff;
 background-color: #007bff;
 color: #fff;
}
</style>
