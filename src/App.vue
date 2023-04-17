<template>
    <div id="app" class="BackgroundImage">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style>
html, body {
    font-family: sans-serif;
}
.BackgroundImage {
    height: 100vh;
    width: 100%;
    background-image: url('./assets/images/BackgroundImage.jpg');
    background-size: cover;
    background-color: transparent;
}
</style>
