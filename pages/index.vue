<script lang="ts" setup>
const { data: tasks, error, status } = await useFetch('/api/tasks')
</script>

<template>
    <section class="task-list" aria-live="polite">
        <article v-if="status === 'pending'" class="list-message">
            Loading tasks...
        </article>
        <article v-else-if="error" class="list-message error" role="alert">
            {{ error.statusMessage || 'Unable to load tasks. Please try again.' }}
        </article>
        <article v-else-if="tasks?.length === 0" class="list-message">
            No tasks yet. Create one to get started.
        </article>
        <template v-else>
            <article v-for="task in tasks" :key="task.id" class="task">
                {{ task.title }}
                <div class="buttonContainer">
                    <NuxtLink class="button" :to="{ name: 'tasks-id', params: { id: task.id }}">
                        View
                    </NuxtLink>
                </div>
            </article>
        </template>
    </section>
</template>


<style scoped>
.task-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
article {
    background-color: var(--background-light);
    color: var(--text-color);
    width: 50vw;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
}
.task {
    min-height: 2rem;
    align-items: center;
}
.list-message {
    min-height: 2rem;
    align-items: center;
}
.error {
    color: var(--error-color);
    border: 2px solid var(--error-color);
}
</style>
