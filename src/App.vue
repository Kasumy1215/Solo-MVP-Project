<template>
  <div id="app">
      <h2>To Do List</h2>
  <form v-on:submit.prevent>
    <input
      type="text"
      v-model="newItem" />
    <button
      v-on:click="addItem">
      Add
    </button>
  </form>
  <ul>
    <li
     v-for="(todo, index, key) in todos" :key="key">
      <input
       type="checkbox"
       v-model="todo.isDone">
      <span
       v-bind:class="{done: todo.isDone}"
       >{{ todo.item }}</span>
      <!-- <span>{{ todo.item }}</span> -->


      <button
       v-on:click="deleteItem(index)"
       >Delete</button>
    </li>
  </ul>
  </div>
</template>

<script>
// import addListToDb from "../db/updateToDoList"
// import getListsFromDb from "../db/updateToDoList"

export default {
  name: "App",
  data:function () {
    return {
    newItem: "",
    todos: []
    }
  },

  methods: {
    addItem: function () {
      const todo = {
        item: this.newItem,
        isDone: false
      };
      if(this.newItem){
        this.todos.push(todo);
        // addListToDb(this.newItem);
        this.newItem = "";
      }
      // this.todos = getListsFromDb();
      // console.log(this.todos);
      // const currentLists = getListsFromDb();
      // console.log(currentLists);
      return this.todos;
    },
    deleteItem: function(index){
      console.log(index);
      this.todos.splice(index, 1);
      return this.todos;
    }
  }
};
</script>

<style>
#app {
  max-width: 640px;
  margin: 0 auto;
}
#app ul{
  list-style: none;
}
#app li > span.done{
  color: grey;
}

button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #07a0ec;
  color: #fff;
  cursor: pointer;
}
</style>
