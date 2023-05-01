<template>
    <div class="centerGraph">
        <div class="blackBox">
            <table>
                <tbody>
                <tr>
                    <td v-for="(column, index) in columns" :key="index"><b>{{ column.key }}</b></td>
                </tr>
                <tr v-for="(profile, index) in profiles" :key="index">
                    <td v-for="(column, index1) in columns" :key="index1">{{ profile[column.value] }}</td>
                </tr>
                </tbody>
            </table>
            <div style="padding: 10px; display: flex; justify-content: end; background-color: black">
                <button class="inputField">
                    <router-link class="loginButton" to="/">
                        Back to Login
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import {RouterLink} from 'vue-router';

export default {
    name: "UserTable",
    components: {
        RouterLink
    },
    created() {
        axios.get('http://localhost:3000/users').then(response => {
            this.profiles = response.data;
            console.log('Profiles:', this.profiles)
        })
    },
    data() {
        return {
            columns: [
                {key: 'ID', value: '_id'},
                {key: 'Email', value: 'email'},
                {key: 'Username', value: 'userName'},
                {key: 'First Name', value: 'firstName'},
                {key: 'Middle Name', value: 'middleName'},
                {key: 'Last Name', value: 'lastName'},
                {key: 'Password', value: 'password'}
            ],
            profiles: []
        }
    }
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
    pointer-events: all;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000;
    padding: 10px;
    border: black solid 3px;
}
.inputField {
    filter: invert(1);
}
.loginButton {
    color: inherit;
    text-decoration: none;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    text-align: left;
    padding: 8px;
}

th {
    background-color: #4caf50;
    color: white;
}

tr:nth-child(even) {
    background-color: #131313;
}
</style>