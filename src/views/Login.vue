<template>
    <div class="login-bg">
        <v-container class="pa-5">
            <v-form class="pa-5 d-flex justify-center" @submit.prevent="submitLogin">
                <v-card elevation="1" width="350px" class="pa-5 login-box">
                    <v-card-title class="my-5">
                        <h2>Sign In</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field class="inputs" label="Username" v-model="username" required></v-text-field>
                        <v-text-field class="inputs" type="password" label="Password" v-model="password" required></v-text-field>

                        <v-btn class="mt-5" type="submit" rounded color="primary" block elevation="0">Sign In</v-btn>
                    </v-card-text>
                </v-card>
            </v-form>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        submitLogin () {

        }
    }
}
</script>

<style scoped>
.inputs {
    text-align: center;
}
</style>
