<template>
 <section id="app">
  <div class="container">
   <h1 class="title">To Do App</h1>
   <ListTodo :listTodos="listTodos" v-if="listTodos.length > 0" />
   <SearchFormVue :handleSubmitTodos="handleSubmitTodos" :listTodos="listTodos" />
  </div>
 </section>
</template>

<script>
import SearchFormVue from '@/components/SearchForm.vue';
import ListTodo from '@/components/ListTodo.vue';

export default {
 name: 'App',
 components: {
  SearchFormVue,
  ListTodo,
 },
 data() {
  return {
   listTodos: [],
  };
 },
 methods: {
  handleSubmitTodos(todos) {
   console.log(todos);
   this.listTodos.push(todos);
  },
 },
};
</script>

<style>
@import url(./assets/styles/reset.css);
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 background-color: #eee;
 width: 100vw;
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

.container {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 background-color: #fff;
 padding: 2rem;
 border-radius: 1rem;
}

.title {
 text-align: center;
 font-weight: bold;
 font-size: 1.5rem;
 margin-bottom: 2rem;
}
</style>
