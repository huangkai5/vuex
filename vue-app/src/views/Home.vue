<template>
  <div id="app">
    <AddTodo v-on:handleAdd="handleAdd"/>
    <Todos :todos="todos" @handleDelete="handleDelete"/>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";

import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      msg: "hello",
      todos: []
    };
  },
  components: {
    Todos,
    AddTodo
  },
  methods: {
    handleDelete(id) {
      // console.log(id);
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
        .catch(err => console.log(err));
    },
    handleAdd(newTodo) {
      // this.todos.unshift(newTodo);

      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(res => (this.todos = [res.data, ...this.todos]))
        .catch(err => console.log(err));
    }
  },
  created() {
    // 数据请求
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        // console.log(res.data)
        this.todos = res.data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
