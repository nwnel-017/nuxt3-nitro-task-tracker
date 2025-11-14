<script lang="ts" setup>
const {data: tasks, error, status} = await useFetch('/api/tasks')
</script>

<template>
    <div class="task-list">
        <article v-for="task in tasks" :key="task.id">
            {{ task.title }}
            <div class="buttonContainer">
                <NuxtLink class="button" :to="{ name: 'tasks-id', params: { id: task.id }}">
                    View
                </NuxtLink>
            </div>
        </article>
    </div>
</template>


<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
article {
    height: 2rem;
    background-color: var(--background-light);
    color: var(--text-color);
    width: 50vw;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
}
article .error {
    color: var(--error-color);
    border: 2px solid var(--error-color);
}
</style>