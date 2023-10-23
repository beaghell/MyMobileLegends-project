<template>
    <!-- ОСНОВНОЙ ДИВ -->
    <div class="backWithCard"> 
        <!-- КНОПКА НАЗАД -->
        <div>
            <RouterLink class="back"  to="/heroes"><h1>Назад</h1></RouterLink>    
        </div>
        <!-- ДИВ КАРТОЧКА -->
        <div  class="card">
            <!-- ДИВ ЛИ-СУН-СИН ПЕРСОНАЖ -->
            <div class="hero">
                <h1>Ли-Сун-Син</h1>
                <img class="heroImage" src="../assets/yi-sun-shin.jpeg">
            </div>
            <!-- ДИВ ЭМБЛЕМ -->
            <div class="sborka" >
                <h1>Эмблемы и снаряжение:</h1>
                <img class="sborkaImage" src="../assets/yi-sun-shinSborka.jpg">
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        name:'YiSunShinHero'
    } 
</script>