<template>
 <table class="table mb-4">
  <thead>
   <tr>
    <th scope="col">No.</th>
    <th scope="col">Todo item</th>
   </tr>
  </thead>
  <tbody>
   <tr v-for="(todo, index) in listTodos" :key="index">
    <td>{{ index + 1 }}</td>
    <td>{{ todo }}</td>
   </tr>
  </tbody>
 </table>
</template>

<script>
export default {
 name: 'ListTodo',
 props: {
  listTodos: {
   type: Array,
   required: true,
  },
 },
};
</script>

<style>
.table {
 width: 100%;
 border-collapse: collapse;
 margin-bottom: 20px;
}

th,
td {
 border: 1px solid #ccc;
 padding: 8px;
 text-align: left;
}

th {
 background-color: #f8f9fa;
 font-weight: bold;
}
</style>
