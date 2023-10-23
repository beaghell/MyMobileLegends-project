import { createApp } from 'vue'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import HomePage from './components/Home.vue'
import AboutUs from './components/About.vue'

import ChatPage from './components/Chat.vue'
import HeroesSel from './components/Heroes.vue'
import  RegisterPage  from './components/register.vue'
import MiyaHero from './components/Miya.vue'
import LeylaHero from './components/Leyla.vue'
import BrunoHero from './components/Bruno.vue'
import IrithelHero from './components/Irithel.vue'
import YiSunShinHero from './components/Yi-Sun-Shin.vue'
import BeatrixHero from './components/Beatrix.vue'
import ClaudeHero from './components/Claude.vue'
import HanabiHero from './components/Hanabi.vue'
import MobileLegendsAPI from './components/Api.vue'


const routes = [
    {path:'/', name:'Home', component: HomePage},
    {path:'/mobileLegendsAPI', name:'API', component: MobileLegendsAPI},
    {path:'/about', name:'About', component: AboutUs},
    {path:'/chat', name:'Chat', component: ChatPage},
    {path:'/heroes', name:'Heroes', component: HeroesSel},
    {path:'/register', name:'Register', component: RegisterPage},
    {path:'/miya', name:'Miya', component: MiyaHero},
    {path:'/leyla', name:'Leyla', component: LeylaHero},
    {path:'/bruno', name:'Bruno', component: BrunoHero},
    {path:'/irithel', name:'Irithel', component: IrithelHero},
    {path:'/yi-sun-shin', name:'Yi-Sun-Shin', component: YiSunShinHero},
    {path:'/beatrix', name:'Beatrix', component: BeatrixHero},
    {path:'/claude', name:'Claude', component: ClaudeHero},
    {path:'/hanabi', name:'Hanabi', component: HanabiHero},
]

const router= createRouter({
    history: createWebHistory(),
    routes
})

const app =createApp(App)
app.use(router)
.mount("#app")


