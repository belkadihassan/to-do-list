<template>
    <div class="aboutContainer">
        <h1>ABOUT</h1>
        <p>
            What is a todo list and how can it help in business and daily life?
            Do any of the following seem familiar?
        </p>

    <ul style="list-style : inside">
        <li>
            You often feel completely overwhelmed with the amount of work you’ve got to do?
        </li>
        <li>
            You sometimes forget to do things that are important
        </li>
        <li>
            People have to chase you to get things done
        </li>
        <li>
            You find it a struggle to keep to deadlines
        </li>
    </ul>
    <p class="end">
        Don’t think you’re unusual because there are thousands of people who struggle with the same every day, not just in the workplace but in their personal life too. Luckily, there is something very simple you can do to keep your life and work more organised.
    </p>
    <router-link to = "/" class="link">GET STARTED
        <i class="fa-solid fa-arrow-right-long"></i>
    </router-link>
    
    </div>
</template>



<script>
export default {
    name : 'AbouT',
}
</script>

<style scoped>

h1{
    font-size: xx-large;
    font-family: 'roboto' , sans-serif;
    margin : 20px 0;
}
.fa-arrow-right-long{
    margin-left: 7px;
}
.link{
    margin : 40px 20px;
    text-decoration: none;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: bold;
    color: #000;
    align-self: flex-end;
}
.link:hover{
    color : red;
}

.aboutContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 10%;
    line-height: 30px;
}
</style>