<template>
    <v-dialog v-model="show" width="500">
        <v-card class="pa-5">
            <v-card-title>
                <h4 class="blue--text">Tips for content</h4>
            </v-card-title>
            <v-card-text>
                <div class="caption mb-5 font-italic">
                    this is a sample description <br />
                    this is the korean translation
                </div>

                <label for="">Write tips below.</label>
                <v-textarea solo flat label="Write something..."></v-textarea>
            </v-card-text>
            <v-card-action>
                <v-row>
                    <v-col cols="6"><v-btn dense elevation="0" block @click="show = false">cancel</v-btn></v-col>
                    <v-col cols="6"><v-btn dense elevation="0" block color="primary">create</v-btn></v-col>
                </v-row>

            </v-card-action>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["show"],
    data () {
        return {
            showModal: false,
            isLoading: true
        }
    },
    watch: {
        show (val) {
            this.getTips()
        }
    },
    methods: {
        getTips () {

        }
    }
}
</script>
