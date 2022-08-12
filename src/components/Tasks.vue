<template>
    <div class="containe rounded-tr-xl rounded-br-xl py-2">
        <div class="tasks-header">
            <h3 v-show="!showSearchbar" class= "font-semibold text-xl br-10">Tasks</h3>
            <SearchBar @searchbarClosed="hideSearchbar()" @searchResult = "searchView" v-show="showSearchbar" :tasks = "tasks"/>
            <i v-show="!showSearchbar" class="fa-solid fa-magnifying-glass ml-20" @click="searchBar"></i>
            <button @click="$emit('addTaskShow')"
            v-show="!showSearchbar"
            class="bg-zinc-900 text-white px-4 py-1 rounded">add task
            </button>
        </div>
        <div class = "tasksContainer">
            <task v-show="searchTasks.length == 0" :key = "task.id" v-for="task in tasks"
                :task = "task"
                @delete-task="$emit('delete-task' , task.id)"
                @toggleRem = "$emit('toggleRem' , task.id)"
            />
            <task v-show="searchTasks.length > 0" :key = "task.id" v-for="task in searchTasks"
                :task = "task"
                @delete-task="deletetask"
                @toggleRem = "$emit('toggleRem' , task.id)"
            />
        </div>
    </div>
</template>

<script>

import task from './Task.vue'
import SearchBar from './SearchBar.vue'

export default {
    name : 'TaskS',
    data (){
        return{
            searchTasks : [],
            showSearchbar : false,
        }
    },
    components : {
        task,
        SearchBar,
    },
    props :{
        tasks : Array
    },
    methods : {
        deletetask(id){
            this.searchTasks = this.searchTasks.filter((data)=>data.id !== id)
            this.$emit('delete-task' , id)
        },
        searchBar(){
            this.showSearchbar = true;
        },
        searchView(data){
            this.searchTasks = data
        },
        hideSearchbar(){
            this.showSearchbar = false
            this.searchTasks = []
        },

    },
    emits : ['delete-task' , 'toggleRem']
}
</script>
<style scoped>

    .containe{
        width : 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        border-left : 3px solid #0D5A5F;
    }
    .tasks-header{
        width: 100%;
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding : 20px 30px;
    }
    .tasksContainer{
        max-height: 300px;
        width : 90%;
        padding : px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius : 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius : 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>