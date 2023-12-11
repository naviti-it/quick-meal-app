<template>
    <div class="p-8 flex-col  text-orange-500">
        <H1 class="text-4xl font-bold mb-4">Random Meals</H1>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import store from '../store';
import Meals from '../components/Meals.vue'
import axiosClient from '../axiosClient.js'

const meals = ref([]);

onMounted(async ()=>{
    for(let i=0; i < 10; i++){
        const response = await axiosClient.get('random.php');
        meals.value.push(response.data.meals[0])
    }
})

</script>