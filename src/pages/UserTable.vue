<template>
    <div class="centerGraph">
        <div class="blackBox">

        </div>
    </div>
</template>

<script>
export default {
    name: "UserTable"
}
</script>

<style scoped>

.centerGraph {
    pointer-events: none;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
    gap: 20px;
    position: relative;
}

.blackBox {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding: 0 10px;
    border: black solid 3px;
}

</style>