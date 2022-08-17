<template>
    <div class="containe">
        <div class="tasks-header">
            <h3 v-show="!showSearchbar" class= "font-semibold text-xl br-10">Tasks</h3>
            <SearchBar @searchbarClosed="hideSearchbar()" @searchResult = "searchView" v-show="showSearchbar" :tasks = "tasks"/>
            <i v-show="!showSearchbar" class="fa-solid fa-magnifying-glass" @click="searchBar"></i>
            <button @click="$emit('addTaskShow')"
            v-show="!showSearchbar"
            class="addtaskBtn">add task
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
    .fa-magnifying-glass{
        margin-left: 100px;
    }
    .containe{
        margin :20px 0;
        width : 400px;
        display: flex;
        padding : 20px 0;
        flex-direction: column;
        align-items: center;
        background: #fff;
        border-radius : 0 10px 10px 0; 
        border-left : 3px solid #0D5A5F;
        box-shadow: 1px 1px 4px #e1e1e1;
    }
    .tasks-header{
        width: 100%;
        display : flex;
        justify-content: space-between;
        align-items: center;
        padding : 20px 30px;
    }
    .addtaskBtn{
        border : none;
        border-radius :2px;
        padding : 7px 15px;
        background-color: rgb(24 24 27);
        color : #fff;
    }
    .tasksContainer{
        max-height: 300px;
        width : 90%;
        padding-left : 8px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

 /** ---------     scroll style     ---------- */
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