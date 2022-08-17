<template>
    <div class="searchbarArea">
        <input @keydown="search" v-model="inputValue" 
        type="text" class="searchInput"
        placeholder="search....">
        <i @click="$emit('searchbarClosed')" class="fas fa-times ml-7"></i>
    </div>
</template>

<script>

export default {
    name : 'SearchBar',
    data(){
        return {
            inputValue : '',
            keysNmb : 0,
            newTasksArray : []
        }
    },
    props : {
        tasks : Array
    },
    emits : ['searchbarClosed'],
    methods: {
        showTasks(){
            
        },
        search(){
            this.tasks.forEach(elem => {
                if(elem.title.slice(0,this.inputValue.length).toLowerCase().trim() === this.inputValue.toLowerCase().trim()){
                    this.newTasksArray = [...this.newTasksArray , elem]
                }
            });

            console.log(this.newTasksArray)
            this.$emit('searchResult' , this.newTasksArray)

            this.newTasksArray = []
        }
    }
}

</script>
<style scoped>
    .searchbarArea{
        width : 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input{
        width : 90%;
        outline: none;
        background: #76777752;
        border: none;
        padding: 7px 20px;
        border-radius: px;
    }
    input:focus{
        border-bottom : 2px solid #0D5A5F;
    }
    .fas:hover{
        color: red;
    }
</style>
