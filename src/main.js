import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// const STORAGE_KEY = 'todos-vuejs-demo'
// const todoStorage = {
//   fetch: function () {
//     var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
//     todos.forEach(function (todo, index) {
//       todo.id = index
//     })
//     todoStorage.uid = todos.length
//     return todos
//   },
//   save: function (todos) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
//   }
// }


new Vue({
  render: h => h(App),
}).$mount('#app')
