<template>
<ul id="todos">
  <li v-for="todo in todos" :key="todo.id"> {{todo.content}}</li>
</ul>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      todos: []
    }
  }, created(){
    fetch('/api/todos').then(res => res.json()).then(json => {
      this.todos = json.todos
    })
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
