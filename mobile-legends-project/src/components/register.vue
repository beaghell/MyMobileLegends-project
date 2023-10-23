<template>
    <div>
        <div class="register" v-if="isAuthenficated">
        <div>Добро пожаловать, {{ userName }}</div>
        <button @click="logout">Выйти</button>
        </div>
        <div class="register" v-else>
            <label>Введите ник</label>
            <div class="test">
                <input v-model="userName" />
                <button class="registerBtn" @click="login">Сохранить</button>
            </div>
        </div>
    </div>
</template>
    
<script>
    export default{
        name:'RegisterPage',
        data(){
            return{
                isAuthenficated:false,
                userName: ""
            }
        },
        methods:{
            login(){
                if(this.userName !==""){
                    this.isAuthenficated =true
                    localStorage.setItem("isAuthenficated",true)
                    localStorage.setItem('userName', this.userName)
                    this.$router.push({
                        query:{userName: this.userName}
                    })
                }else{
                    alert('Напишите ник')
                }
            },
            logout(){
                this.isAuthenficated = false
                this.userName = ""
                localStorage.removeItem('isAuthenficated')
                localStorage.removeItem('userName')
            }   
        },
        created(){ 
            if (localStorage.getItem('isAuthenficated')){ 
                this.isAuthenficated = true, this.userName = localStorage.getItem('userName') } 
            }
    }
</script>

<style scoped>
.register{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    flex-direction: column;
}
</style>