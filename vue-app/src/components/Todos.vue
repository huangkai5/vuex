<template>
  <div>
    <div :key="index" v-for="(todo,index) in todos">
      <!-- <TodoItem :todo="todo" @deleteItem="deleteItem"/> -->
      <TodoItem :todo="todo" @deleteItem="$emit('handleDelete',todo.id)"/>
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  // props: ["todos"]
  props: {
    todos: {
      type: Array
    }
  },
  components: {
    TodoItem
  },
  methods: {
    // deleteItem(id) {
    //   console.log(id);
    // }
  }
};
</script>
<style scoped>
</style>