<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
    </div>
    <div class="flex flex-wrap gap-3 justify-center px-8">
        
            <router-link 
                :to="{name: 'byLetter', params: {letter}}" 
                v-for="letter of letters" :key="letter"
                class="w-2 h-2 hover:text-orange-500 transition-colors mx-2"
                >
                {{letter}}
            </router-link>
        
    </div>
    <div><Meals :meals='meals'/></div>
</template>

<script setup>
 import {onMounted, watch, ref}  from 'vue';
import {computed} from '@vue/reactivity'
 import store from '../store';
 import {useRoute} from 'vue-router';
 import Meals from '../components/Meals.vue'



const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(()=>store.state.mealsByLetter)

watch(route, ()=>{
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(()=>{
        store.dispatch('searchMealsByLetter', route.params.letter)
})
</script>