<template>
    <header>
        <h1 class="text-2xl font-bold">Tasks manager</h1>
        <span v-show="isHomePage">{{timeNow}}</span>
    </header>
</template>

<script>
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    export default{
        name : 'HeadeR',
        data(){
            return {
                timeNow : today,
            }
        },
        computed: {
            isHomePage(){
                if(this.$route.path === '/'){
                    return true
                }else{return false}
            }
        }
    }
    

</script>

<style scoped>
    header{
        height : 80px;
        width : 100%;
        display: flex;
        align-items: center;
        padding-left: 5%;
    }
    span{
        margin-right: 10%;
        font-size: x-large;
    }
    h1{
        color : #0D5A5F;
    }
    header{
        display: flex;
        justify-content: space-between;
    }
</style>