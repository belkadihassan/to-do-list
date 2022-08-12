<template>
<div class="addTaskContainer bg-white pl-10 rounded-tr-xl rounded-br-xl py-6">
    <div class="addTaskHeader flex pb-5">
        <h1 class = "font-semibold">add task</h1>
        <i @click="$emit('hideAddTask')" class="fas fa-times mr-10"></i>
    </div>
    <form @submit="submit" action="">
        <div class="form-controller flex flex-col">
            <label for="title">task title</label>
            <input type="text" name="title"
            v-model="title"
            class = "outline-none px-4 my-2 py-1 inputs"
            placeholder="">
        </div>
    
        <div class="form-controller flex flex-col">    
            <label for="date">Date</label>
            <input type="text" name="date"
             v-model="date"
             class="outline-none px-4 my-2 py-1 inputs"
             placeholder="day month hour"
             >
        </div>

        <div class="form-controller checkboxReminder flex py-2 px-3">
            <div class="checkbox">
                <label for="reminder" class="mr-2">Set reminder</label>
                <input type="checkbox" name="reminder"
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
        emits : ['addTask' , 'hideAddTask']
    }
</script>
<style scoped>
    .addTaskContainer{
        width : 400px;
        border-left: 3px solid #0D5A5F;
        border-top: 3px solid #0D5A5F;
    }
    .addTaskHeader{
        justify-content: space-between;
    }
    input{
        border : 1px solid #ddd;
    }
    .checkboxReminder{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .inputs{
        background-color: rgb(245, 245, 245);
        width: 90%;
    }
    .saveTaskBtn{
        border : 1px solid
    }
    .checkbox{
        align-self: center;
    }
</style>