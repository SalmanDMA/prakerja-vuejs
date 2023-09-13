const state = () => ({
 todos: [],
 editing: null,
 newTodo: '',
});

const mutations = {
 setNewTodo(state, value) {
  state.newTodo = value;
 },
 setEditing(state, index) {
  state.editing = index;
 },
 setDescription(state, { description, index }) {
  state.todos[index].description = description;
 },
 addTodo(state, todo) {
  state.todos.push({
   title: todo,
   description: todo.description,
  });
 },
 startEdit(state, index) {
  state.editing = index;
  state.newTodo = state.todos[index].title;
 },
 updateTodo(state, { index, value }) {
  if (index !== null) {
   state.todos = state.todos.map((todo, i) => {
    if (i === index) {
     return { ...todo, title: value };
    }
    return todo;
   });
  }
 },
 updateDescription(state, { index, description }) {
  state.todos[index].description = description;
 },
 deleteTodo(state, index) {
  state.todos.splice(index, 1);
 },
};

export default {
 state,
 mutations,
};
