<script lang="ts" setup>
import { ref } from 'vue';

const router = useRouter();
const taskTitle = ref('');

function goHome() {
    router.push('/')
}
async function createTask() {
     if (!taskTitle.value.trim()) return;
    const result = await $fetch('/api/tasks', {
        method: 'POST',
        body: {title: taskTitle.value}
    } as any)
    taskTitle.value = '';
}
</script>

<template>
    <form class="form" @submit.prevent="createTask">
        <label>
            Task: 
            <input v-model="taskTitle" name="title" placeholder="Enter Task...">
        </label>
        <div class="buttonContainer">
            <button type="submit">Create</button>
        </div>
    </form>
    <button @click="goHome">Go Home</button>
</template>