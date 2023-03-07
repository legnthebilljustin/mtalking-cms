<template>
    <v-container class="mt-5">
        <div class="page-heading">Unit 1 | Video</div>
        <div class="page-heading-subtitle">Video Material / Course 1</div>
        <v-row class="mt-5">
            <v-col cols="4">
                <div class="field mb-3">
                    <label for="">Youtube ID</label>
                    <input type="text" name="youtube_id" class="custom-input" required>
                </div>
                <div class="field mb-3">
                    <label for="">Video Title</label>
                    <input type="text" name="title" class="custom-input" required>
                </div>

                <v-row class="mb-3">
                    <v-col cols="6">
                        <div class="field">
                            <label for="">Start Time</label>
                            <input type="text" name="start_time" class="custom-input">
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="field">
                            <label for="">End Time</label>
                            <input type="text" name="start_time" class="custom-input">
                        </div>
                    </v-col>
                </v-row>
                <div class="field mb-3">
                    <label for="">Sentence</label>
                    <textarea class="custom-input" name="sentence" cols="30" rows="5"></textarea>
                </div>
                <div class="field mb-3">
                    <label for="">Translation</label>
                    <textarea class="custom-input" name="translation" cols="30" rows="5"></textarea>
                </div>
                <v-btn color="primary" dense block>Create Content</v-btn>
            </v-col>
            <v-col cols="8">

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            inputs: []
        }
    }
}
</script>

<style scoped>
    .custom-input {
        border-bottom: 0 !important;
        border-radius: 0 !important;
        height: 40px;
        padding: 5px 15px;
        box-shadow: 3px 3px 8px rgb(208, 208, 208) !important;
        background-color: white;
        max-width: 400px;
        width: 100%;
    }

    .custom-input:focus {
        outline: none;
    }

    .field {
        position: relative;
    }

    .field label {
        font-size: 0.8rem;
        font-weight: 600;
    }

    button {
        font-weight: 400;
        border-radius: 0 !important;
    }
</style>
