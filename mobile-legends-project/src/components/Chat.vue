<template>

    <div v-if="userName">
        
        <div class="chat">
            <h2 style="margin: 0px;">Чат</h2>
            <div>
                <input v-model="newMessage" placeholder="Введите сообщение ">
                <button @click="sendMessage">Отправить</button>
                <button @click="delMessage">Удалить все сообщения</button>
            </div>
            <div class="text" v-for="message in messages " :key='message.id'>{{ message.user }}: {{ message.text }}</div>
            <div v-show="emptyMsg" class="empty">Текущих сообщений нет</div>
        </div>
    </div>

    <div style="display:flex ; justify-content: center;" v-else>
        <h1>Чтобы зарегестрироваться нажмите <RouterLink  class="link" to="register">сюда</RouterLink> </h1>
    </div>
    </template>
    
    <script>
    export default{
        name:'ChatPage',
        data(){
            return{
                messages: [],
                newMessage: '',
                emptyMsg: true,
                userName: localStorage.getItem('userName')
            }
        },
        computed(){
            localStorage.setItem('userName', this.$route.query.userName)
        },
        methods: {
            sendMessage(){
                if(this.newMessage !== ''){
                    this.emptyMsg = false
                    this.messages.push({id: new Date().getTime(), text: this.newMessage, user: this.userName})
                    this.saveChatRecords()
                    this.newMessage=''
                }else{
                    alert('введите сообщение')
                }
            },
            saveChatRecords(){
                const records = this.messages
                localStorage.setItem(`messages_${this.userName}`, JSON.stringify(records))
            },
            loadChatRecords(){
                const records = JSON.parse(localStorage.getItem(`messages_${this.userName}`))
                if(records){
                    this.messages = records
                    this.emptyMsg = false
                }
            },
            delMessage(){
                this.messages = []
                localStorage.removeItem(`messages_${this.userName}`, JSON.stringify(this.messages))
                this.emptyMsg = true
            }
        },
        created(){
            this.loadChatRecords()
        }
    }
    </script>

    <style scoped>
    .link{
        color: white;
        text-decoration: none;
    }
    .link:hover{
        text-decoration: underline;
    }

    .chat{
        font-size: 25px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    </style>