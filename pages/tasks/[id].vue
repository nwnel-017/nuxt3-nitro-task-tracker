<script lang="ts" setup>
const route = useRoute();

const {data: task, error, status} = await useFetch(`/api/tasks/${route.params.id}`, {
    lazy: true
})
</script>

<template>
    <div>
        <article v-if="error" class="error">
            {{ error.statusMessage }}
        </article>
        <article v-else-if="task">
            {{ task?.title }}
        </article>
    </div>
</template>

<style scoped>

</style>