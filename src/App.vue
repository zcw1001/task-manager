<script setup>
</script>

<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<style>
:root {
    --width: 400px;

    --black: #141414;
    --red: #ff4d4f;
    --yellow: #ffe58f;
    --blue: #91d5ff;
    --cyan: #87e8de;
}
body, html {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;

    background-color: #f0f0f0;
    background-image: url('./assets/background.png');
    background-size: cover;
}


.app-container {
    position: relative;
    width: var(--width);
    height: 100vh;
    box-sizing: border-box;
    padding: 0 40px;

    background-color: white;
}

</style>
