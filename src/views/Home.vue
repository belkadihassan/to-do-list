<template>
    <div class="tasks-container">
    <AddTask v-show="this.addTaskIsActivated" 
    @addTask = "addTask"
    @hideAddTask = "addTaskHide"
    />
    <Tasks class = "tasks pb-4" :tasks = "this.tasks"
    @delete-task="deleteTasks"
    @toggleRem="toggleReminder"
    @addTaskShow = "addTaskShow"
    />
  </div>
</template>

<script>

import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name : 'HomE',
    components : {
        Tasks,
        AddTask
    },
    data (){
        return {
            tasks :[],
            addTaskIsActivated : false
        }
    },
    async created(){
        this.tasks = await this.fetchTasks()
    },
    methods : {
        async deleteTasks(id){
            if(confirm('are u sure')){
                const res = await fetch(`api/tasks/${id}` , {
                method : 'DELETE',
                })
                res.status === 200 ?
                (this.tasks = this.tasks.filter((data)=>data.id !== id))
                : alert('Error deleting task')
            }
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
}
</script>


<style scoped>  
.tasks{
    margin-top: 50px;
}
.tasks-container{
    display : flex;
    flex-direction: column;
    align-items: center;
}

</style>