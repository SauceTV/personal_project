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
                        E-mail*
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
                    <input class="inputField" style="flex: 1" type="password"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        Repeat Password*
                    </div>
                    <input class="inputField" style="flex: 1" type="password"/>
                </div>
            </div>
            <div style="padding: 10px; display: flex; justify-content: end; background-color: black">
                <button class="inputField" @click="submitCreateAccount()">
                    Submit
                </button>
            </div>
        </div>

        <div class="blackBox">
            <img src="../../public/output-onlinegiftools.gif" alt="Loading" contain style="height: 100px"/>
            <div style="font-weight: bold; color: #6c6c6c; margin-bottom: 10px">678 Users online now!</div>
        </div>
        <div class="blackBox">
            <div class="loginFields">
                <div class="inputGroup">
                    <div class="prependLabel">
                        <fai icon="fa-solid fa-user"/>
                    </div>
                    <input class="inputField" v-model="username"/>
                </div>
                <div class="inputGroup">
                    <div class="prependLabel">
                        <fai icon="fa-solid fa-lock"/>
                    </div>
                    <input class="inputField" v-model="password" type="password"/>
                </div>
                <div class="loginButtons">
                    <div class="forgotPasswordText">
                        forgot password?
                    </div>
                    <button class="inputField" @click="login()">
                        Login
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

export default {
    name: "UserLogin",
    data() {
        return {
            password: "",
            username: "",
            createAccountModal: {
                bool: false,
                data: null,
                template: {
                    username: null,
                    email: null,
                    firstName: null,
                    middleName: null,
                    lastname: null,
                    password: null,
                },
                confirmPassword: "",
            }
        }
    },
    created() {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.login();
            }
        });
    },
    methods: {
        login() {
            if (this.username === "SauceTV" && this.password === "password") {
                this.$router.push('UserTable')
            }
        },
        openCreateAccountModal() {
            this.createAccountModal.data = JSON.parse(JSON.stringify(this.createAccountModal.template));
            this.createAccountModal.bool = true;
        },
        submitCreateAccount() {
            this.createAccountModal.bool = false;
        }
    }
}
</script>

<style scoped>
.createAccountModal {
    position: absolute;
    width: 300px;
    background-color: #151515;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.centerLogin {
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

.loginFields {
    pointer-events: all;
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