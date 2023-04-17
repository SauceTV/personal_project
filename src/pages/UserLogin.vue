<template>
    <div class="centerLogin">

        <div v-if="createAccountModal.bool" class="createAccountModal">
            <div style="padding: 10px; display: flex; justify-content: space-between; background-color: black">
                <div style="font-size: 17px; font-weight: bold">Create Account</div>
                <fai icon="fa-solid fa-close" @click="createAccountModal.bool = false"/>
            </div>
            <div style="flex: 1; padding: 10px; display: flex; flex-direction: column; gap: 10px">
                <div class="inputGroup">
                    <div class="prependLabel">
                        Username*
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        First Name*
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        Middle Name
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        Last Name*
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        Password*
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        Repeat Password*
                    </div>
                    <input class="inputField" style="flex: 1"/>
                </div>
            </div>
            <div style="padding: 10px; display: flex; justify-content: end; background-color: black">
                <button class="inputField" @click="createAccountModal.bool = false">
                    Submit
                </button>
            </div>
        </div>

        <div class="blackBox">
            <div class="productName">Dark Pattern Chat</div>
        </div>
        <div class="blackBox">
            <div class="loginFields">
                <div class="inputGroup">
                    <div class="prependLabel">
                        <fai icon="fa-solid fa-user"/>
                    </div>
                    <input class="inputField"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        <fai icon="fa-solid fa-lock"/>
                    </div>
                    <input class="inputField" type="password"/>
                </div>
                <div class="loginButtons">
                    <div class="forgotPasswordText">
                        forgot password?
                    </div>
                    <button class="inputField">
                        <router-link class="loginButton" to="/room">
                            Login
                        </router-link>
                    </button>
                </div>
                <div class="orDivider">
                    <div class="orDividerLines"/>
                    <div>or</div>
                    <div class="orDividerLines"/>
                </div>
                <button class="inputField" @click="openCreateAccountModal()">
                    Create Account
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {RouterLink} from 'vue-router';

export default {
    name: "UserLogin",
    components: {
        RouterLink
    },
    data() {
        return {
            createAccountModal: {
                bool: false,
                data: null,
                template: {
                    username: null,
                    firstName: null,
                    middleName: null,
                    lastname: null,
                    password: null,
                },
                confirmPassword: ""
            }
        }
    },
    methods: {
        openCreateAccountModal() {
            this.createAccountModal.data = Object.assign({}, this.createAccountModal.template);
            this.createAccountModal.bool = true;
        }
    }
}
</script>

<style scoped>
.createAccountModal {
    width: 300px;
    position: absolute;
    background-color: #151515;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.centerLogin {
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
    background-color: #151515;
    padding: 0 10px;
    border: black solid 3px;
}

.productName {
    display: flex;
    align-items: center;
    font-stretch: expanded;
    height: 100px;
    font-size: 50px;
    font-weight: 900;
}

.loginFields {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    margin: 10px 0;
}

.inputGroup {
    display: flex;
    justify-content: stretch;
}

.prependLabel {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(118, 118, 118);
    border-right: 0;
    padding: 3px;
    border-radius: 1px 0 0 1px;
    font-size: 13px;
    word-break: initial;
}

.inputField {
    filter: invert(1);
}

.loginButtons {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.forgotPasswordText {
    font-size: 12px;
    color: #4e9acd;
}

.loginButton {
    color: inherit;
    text-decoration: none;
}

.orDivider {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin: 5px 0;
}

.orDividerLines {
    border-bottom: 1px solid white;
    flex: 1;
    margin: 0 5px
}
</style>