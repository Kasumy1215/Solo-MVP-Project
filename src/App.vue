<template>
  <div id="app">
    <h1>To Do List</h1>
    <img 
    id="schedule"
    src="https://4.bp.blogspot.com/-wgkB4tyF6Go/VEETo61TbZI/AAAAAAAAojA/D6SyZsXOu0E/s800/techou_open.png" alt="schedule">
  <form
    id="form"
    v-on:submit.prevent>
    <input
      type="text"
      v-model="newItem"
      placeholder="write task" />
    <button
      class="add-btn"
      v-on:click="addItem">
       Add 
    </button>
  </form>
  <ul
   id= "lists">
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
       class="delete-btn"
       v-on:click="deleteItem(index)"
       >Delete</button>
    </li>
  </ul>
  </div>
</template>

<script>
// import addListToDb from "../db/updateToDoList"
// import getListsFromDb from "../db/updateToDoList"
// import todoStorage from "./main"
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
body{
  text-align: center;
  background-color:#ff6f54;
  font-family: serif;
}

#app {
  text-align: center;
  background-color:rgb(248, 212, 165);
}

#app h1{
  padding-top: 50px; 
  height:50px;
  font-family: fantasy, serif;
}

#app ul{
  list-style: none;
}
#app li > span.done{
  color: grey;
}

#app > form{
  font-size: 30px;
}

img{
  width: 200px;
}

.add-btn {
  border: none;
  border-radius: 15px;
  line-height: 50px;
  margin-top: 0.5px;
  margin-bottom: 0.5px;
  margin-right: 10px;
  padding-right: 10px;
  margin-left: 10px;
  padding-left: 10px;
  background:rgb(233, 143, 26);
  color: #fff;
  cursor: pointer;
}

.delete-btn {
  border: none;
  border-radius: 15px;
  line-height: 50px;
  margin-top: 0.5px;
  margin-bottom: 0.5px;
  margin-right: 10px;
  padding-right: 10px;
  margin-left: 10px;
  padding-left: 10px;
  background:rgb(146, 216, 67);
  color: #fff;
  cursor: pointer;
}

</style>
