<template>
  <div id="app">
      <h2>toDo List</h2>
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
      <button
       v-on:click="deleteItem(index)"
       >Delete</button>
      <!-- <p v-if=()>Done</p> -->
    </li>
  </ul>
  </div>
</template>

<script>

export default {
  name: "App",
  data:function () {
    return {
    newItem: "",
    todos: []
    // current: -1,
    // options: [
    //   { value: -1, label: 'ALL' },
    //   { value: 0, label: 'Working' },
    //   { value: 1, label: 'Accomplished' }
    // ]
    }
  },

  methods: {
    // doAdd: function(event, value) {
    addItem: function () {
      console.log("!!!!!!!!!!!!!!!!");
      console.log(this.newItem);

      const todo = {
        item: this.newItem,  // このnewItemはdataのnewItem
        isDone: false
      };
      //作成したオブジェクトをtodosに入れる
      if(this.newItem){
        this.todos.push(todo);
        this.newItem = "";
      }
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
* {
  box-sizing: border-box;
}
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

table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}
</style>
