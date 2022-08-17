<template>
<div :class="[this.reminder ? 'greenBorder' : '','addTaskContainer']">
    <div class="addTaskHeader">
        <h3>add task</h3>
        <i @click="$emit('hideAddTask')" class="fas fa-times mr-10"></i>
    </div>
    <form @submit="submit" action="">
        <div class="form-controller">
            <label for="title">task title</label>
            <input type="text" name="title"
            v-model="title"
            class = "outline-none px-4 my-2 py-1 inputs"
            placeholder="">
        </div>
    
        <div class="form-controller">    
            <label for="date">Date</label>
            <input type="text" name="date"
             v-model="date"
             class="outline-none px-4 my-2 py-1 inputs"
             placeholder="day month hour"
             >
        </div>

        <div class="checkboxReminder">
            <div class="checkbox">
                <label for="reminder" class="mr-2">Set reminder</label>
                <input id ="checkbox" type="checkbox" name="reminder"
                v-model="reminder"
                >
            </div>
            <input type="submit" value="save task" class="saveTaskBtn bg-white border-neutral-900 rounded px-3 py-1">
        </div>

    </form>
</div>
</template>
<script>
    export default{
        name : 'AddTask',
        data(){
            return {
                title : '',
                date : '',
                reminder : false
            }
        },
        methods : {
            submit(e){
                e.preventDefault()

                if(!this.title){
                    alert('please add a task')
                    return;
                }

                const newTask = {
                    //id : Math.floor(Math.random() * 100000),
                    title : this.title,
                    date : this.date,
                    reminder : this.reminder
                }

                this.$emit('addTask' , newTask)

                this.title = ''
                this.date = ''
                this.reminder = false
                
            }
        },
        emits : ['addTask' , 'hideAddTask'],
    }
</script>
<style scoped>
    .addTaskContainer{
        width : 400px;
        padding: 30px;
        box-shadow: 1px 1px 4px #e1e1e1;
        border-radius : 0 10px 10px 0;
        
    }
    .addTaskHeader{
        display: flex;
        padding-bottom: 20px;
        justify-content: space-between;
    }
    i:hover{
        color : red;
    }
    input{
        border : 1px solid #ddd;
    }
    .checkboxReminder{
        margin: 20px 10px 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .inputs{
        padding: 10px;
        margin-bottom: 15px;
        background-color: rgb(245, 245, 245);
        width: 100%;
        outline: none;
    }
    .saveTaskBtn{
        background: none;
        padding : 7px 15px;
        border-radius : 2px;
        border : none;
        border: #0D5A5F 2px solid;
    }
    .checkbox{
        display: flex;
        align-items: center;
    }
    .checkbox input{
        margin-left: 10px;
    }
    .form-controller{
        display: flex;
        flex-direction: column;
    }
    .inputs:focus{
        border-bottom : 2px solid #0D5A5F;
        border-spacing: 5px;
    }
    .greenBorder{
        border-left: 5px solid green;
        border-spacing: 5px;
    }
</style>