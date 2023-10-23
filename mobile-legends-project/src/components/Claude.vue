<template>
    <!-- ОСНОВНОЙ ДИВ -->
    <div class="backWithCard"> 
        <!-- КНОПКА НАЗАД -->
        <div>
            <RouterLink class="back"  to="/heroes"><h1>Назад</h1></RouterLink>    
        </div>
        <!-- ДИВ КАРТОЧКА -->
        <div  class="card">
            <!-- ДИВ КЛАУД ПЕРСОНАЖ -->
            <div class="hero">
                <h1>Клауд</h1>
                <img class="heroImage" src="../assets/claude.jpg">
            </div>
            <!-- ДИВ ЭМБЛЕМ -->
            <div class="sborka" >
                <h1>Эмблемы и снаряжение:</h1>
                <img class="sborkaImage" src="../assets/claudeSborka.jpg">
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name:'ClaudeHero'
    } 
</script>