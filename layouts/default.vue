<template>
    <div class="page">
       <AppNavBar />
        <main class="container">
            <slot />
        </main>
    </div>
</template>

<style>
.page {
    width: 50%;
    margin: 0 auto;
}

.buttonContainer {
    display: flex;
    justify-content: end;
}

.button {
    color: var(--text-blue);
    border: 1px solid var(--text-blue);
    border-radius: 0.5rem;
    padding: 0.1rem;
    text-decoration: none;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 0.5rem;
}

.form input {
    border-radius: 0.25rem;
    background-color: var(--background-light);
    color: var(--text-color)
}
</style>