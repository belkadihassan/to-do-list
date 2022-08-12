<template>

  <div class="designbox"></div>
  <Header1 />
  <div class="tasks-container">
    <AddTask v-show="this.addTaskIsActivated" 
    @addTask = "addTask"
    @hideAddTask = "addTaskHide"
    />
    <Tasks class = "tasks" :tasks = "this.tasks"
    @delete-task="deleteTasks"
    @toggleRem="toggleReminder"
    @addTaskShow = "addTaskShow"
    />
  </div>
</template>

<script>

import Header1 from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'

export default {
  name: 'App',
  components: {
    Header1,
    Tasks,
    AddTask
  },
  methods : {
    async deleteTasks(id){
      const res = await fetch(`api/tasks/${id}` , {
        method : 'DELETE',
      })
      res.status === 200 ?
      (this.tasks = this.tasks.filter((data)=>data.id !== id))
      : alert('Error deleting task')
    },
    async toggleReminder(id){
      try{
        const taskToToggle = await this.fetchTask(id)
        const updatedTask = {...taskToToggle , reminder : !taskToToggle.reminder}

        const res = await fetch(`api/tasks/${id}`,{
          method : 'PUT',
          headers : {
            'Content-type' : 'application/json'
          },
          body : JSON.stringify(updatedTask)
        })
        const data = await res.json()
        this.tasks.forEach(elem => {
        if(elem.id === id){
          elem.reminder = data.reminder
        }
        })
      }
      catch(e){
        alert(e)
      }

      
    },
    addTaskShow(){
      this.addTaskIsActivated = true
    },
    addTaskHide(){
      this.addTaskIsActivated = false
    }
    ,
    async addTask(task){
      const res = await fetch('api/tasks' , {
        method : 'POST',
        headers : {
          'Content-type' : 'application/json',
        },
        body : JSON.stringify(task)
      })
      const data = await res.json()
      this.tasks = [...this.tasks , data]
    },
    async fetchTasks(){
      try{
        const res = await fetch('api/tasks')
        const data = await res.json()
        return data
      }
      catch(e){
        alert(e)
      }
    },
    async fetchTask(id){
      try{
        const res = await fetch(`api/tasks/${id}`)
        const data = await res.json()
        return data
      }
      catch(e){
        alert(e)
      }
    }
  },
  data(){
    return{
      tasks : [],
      addTaskIsActivated : false
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&family=Roboto:wght@300&display=swap');
  
  body{
    overflow-x: hidden;
  }
  *{
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin : 0;
    padding: 0;
  }
</style>
<style scoped>
  .designbox{
    position : absolute;
    width : 100%;
    height: 230%;
    right : -50%;
    top : -220px;
    background: #0D5A5F;
    transform: rotate(30deg);
    z-index: -1;
  }
  .tasks{
    margin-top: 50px;
  }
  .tasks-container{
    display : flex;
    flex-direction: column;
    align-items: center;
  }
  

</style>