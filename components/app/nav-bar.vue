<template> 
    <nav class="container">
        <div>
            <NuxtLink to="/"><strong>Tasks App</strong></NuxtLink>
        </div>
        <div>
            <NuxtLink to="create" class="button">Create Task</NuxtLink>
        </div>
    </nav>
</template>



<style>
.container {
    display: flex;
    justify-content: space-between;
    height: 3rem;
}
</style>