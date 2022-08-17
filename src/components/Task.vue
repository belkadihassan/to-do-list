<template>
    <div @dblclick="$emit('toggleRem')" :class = "[task.reminder ? 'reminder' : '' ,
     'container']">
        <div class="taskBody">
            <h3 class="title">{{task.title}}</h3>
            <p class="date">{{task.date}}</p>
        </div>
        <div class="icon">
            <svg @click = "$emit('delete-task' , task.id)"
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
            </svg>
        </div>
    </div>
</template>
<script>


export default {
    name : 'TasK',
    props : {
        task : Object
    },
    emits : ['delete-task' , 'toggleRem']
}
</script>
<style scoped>
    .icon{
        color : rgb(24 24 27);
    }
    .icon:hover{
        color : red;
    }
    .container{
        display : flex;
        justify-content: space-between;
        align-items: center;
        width : 90%;
        height: 60px;
        background: rgb(245, 245, 245);
        padding: 10px;
        margin-bottom: 12px;
    }
    .taskBody{
        width : 90%;
        display : flex;
        flex-direction: column;
        justify-content: center;
    }
    *{
        font-family: 'Roboto', sans-serif;
    }
    .reminder{
        border-left: 4px solid green;
    }
</style>