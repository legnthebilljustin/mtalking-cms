<template>
    <div class="login-bg">
        <v-form class="pa-5 d-flex justify-center align-center">
            <v-card elevation="1" width="400px" class="pa-5">
                <v-card-title>
                    <h1>Login</h1>
                </v-card-title>
                <v-card-text>
                    <v-textfield label="Username" v-model="username"></v-textfield>
                    <v-textfield type="password" label="Password" v-model="password"></v-textfield>
                </v-card-text>
            </v-card>
        </v-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: "",
            password: ""
        }
    }
}
</script>
