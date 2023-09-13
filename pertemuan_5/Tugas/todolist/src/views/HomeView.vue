<template>
 <div class="container">
  <h1>Todo List</h1>
  <ListTodo />
  <InputField />
 </div>
</template>

<script>
import InputField from '@/components/InputField.vue';
import ListTodo from '@/components/ListTodo.vue';

export default {
 name: 'HomeView',
 components: {
  InputField,
  ListTodo,
 },
};
</script>

<style scoped>
.container {
 padding: 10px;
}

h1 {
 font-size: 24px;
 margin-bottom: 20px;
}
</style>
