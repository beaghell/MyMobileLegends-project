<template>
    <div class="allHeroes">
        <!-- МИЯ -->
        <div class="heroCard">            
            <h1>Мия</h1>
            <RouterLink to="/miya">
                <img class="heroImage" src="../assets/Miya.jpeg"> 
            </RouterLink>
        </div>
        <!-- ЛЕЙЛА -->
        <div class="heroCard">
            <h1>Лейла</h1>
            <RouterLink to="/leyla">
                <img class="heroImage" src="../assets/leyla.jpeg">
            </RouterLink>
        </div>
        <!-- БРУНО -->
        <div class="heroCard">
            <h1>Бруно</h1>
            <RouterLink to="/bruno">
                <img class="heroImage" src="../assets/bruno.jpeg">
            </RouterLink>
        </div>
        <!-- ИРИТЕЛЬ -->
        <div class="heroCard">
            <h1>Бруно</h1>
            <RouterLink to="/irithel">
                <img class="heroImage" src="../assets/irithel.jpg">
            </RouterLink>
        </div>
                <!-- ЛИ-СУН-СИН -->
        <div class="heroCard">
            <h1>Ли-Сун-Син</h1>
            <RouterLink to="/yi-sun-shin">
                <img class="heroImage" src="../assets/yi-sun-shin.jpeg">
            </RouterLink>
        </div>
        <!-- БЕАТРИС -->
        <div class="heroCard">
            <h1>Беатрис</h1>
            <RouterLink to="/beatrix">
                <img class="heroImage" src="../assets/beatrix.jpg">
            </RouterLink>
        </div>
        <!-- КЛАУД -->
        <div class="heroCard">
            <h1>Клауд</h1>
            <RouterLink to="/claude">
                <img class="heroImage" src="../assets/claude.jpg">
            </RouterLink>
        </div>
        <!-- ХАНАБИ -->
        <div class="heroCard">
            <h1>Ханаби</h1>
            <RouterLink to="/hanabi">
                <img class="heroImage" src="../assets/hanabi.jpeg">
            </RouterLink>
        </div>
    </div>
</template>
    
    
    
    
    <script>
    export default{
        name:'HeroesSel'
    } 
    </script>

<style>
button {
    background-color: #555555;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    padding-top: 4px;
    padding-bottom: 4px;
    border: 1px solid black;
    margin-left: 1px;
    margin-right:1px ;
    margin-top: 4px;
}
.allHeroes{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.sborkaImage{
    height: 7em;
    width: 63em;
}
img{
    background-color: #EEDDFF;
    border: solid black;
    border-radius: 25px;
}
.hero{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.heroImage{
    width: 20em;
    height: 33em;
}
.sborka{
    display: flex;
    flex-direction: column;
}
.card{
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    width: 100%;
}
.back{
    display: inline-block;
    text-decoration: none;
    color: white;
}
.back:hover{
    text-decoration: underline
}
.backWithCard{
    display: flex;
}
.heroCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 2em;
}
</style>

    