<template>
    <div class="nav">
        <nav class="navBar"> 
            <RouterLink class="nav-link" to="/">Домашняя страница</RouterLink>
            <RouterLink class="nav-link" to="/heroes">Герои</RouterLink>
            <RouterLink class="nav-link" to="/chat">Чат</RouterLink>
            <RouterLink class="nav-link" to="/register">Зарегестрироваться</RouterLink>
            <RouterLink class="nav-link" to="/mobileLegendsAPI">Проверить id</RouterLink>
        </nav>
    </div>
</template>

<script>
    export default{
        name:'NavComp',  
    }
</script>

<style>
.nav-link{
    text-decoration: none;
    color: white;
    font-size: 25px;
}
.nav-link:hover{
    text-decoration: underline;
}
.navBar{
    display: flex;
    justify-content: space-between;
    width: 1000px;
}
.nav{
    background-color: rgb(68, 68, 68);
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>
