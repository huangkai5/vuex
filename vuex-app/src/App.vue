<template>
  <div id="app">
    <!-- state & getters -->
    <!-- <p>{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(3)}}</p>-->

    <!-- mutations -->
    <button @click="decrementCountAsync({amout: 1})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>

    <!-- fetchTodos -->
    <br>
    <br>
    <div>{{completedTodos}}</div>

    <button @click="fetchTodos">拉取api接口数据</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: {},
  computed: mapGetters([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  // methods: mapMutations(["incrementCount", "decrementCount"])
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchTodos"
  ])
  // methods: {
  //   increment() {
  //     // console.log(1);
  //     // 触发mutation里的方法
  //     // this.$store.commit("incrementCount");

  //     // actions
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrement(m) {
  //     // console.log(0);
  //     // this.$store.commit("decrementCount", m);

  //     // actions
  //     this.$store.dispatch("decrementCountAsync", m);
  //   },
  //   fetchTodos() {
  //     this.$store.dispatch("fetchTodos");
  //   }
  // }

  // getters & mapGetters
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }

  // state & mapState
  // computed: mapState(["count", "todos"])
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
