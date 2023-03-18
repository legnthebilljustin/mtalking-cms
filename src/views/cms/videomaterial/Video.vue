<template>
    <v-container class="mt-5">
        <div class="page-heading">Unit 1 | Video</div>
        <div class="page-heading-subtitle">Video Material / Course 1</div>
        <v-row class="mt-5">
            <v-col cols="5">
                <div class="field mb-3">
                    <label for="">Youtube ID</label>
                    <input type="text" name="youtube_id" class="custom-input" required>
                </div>
                <div class="field mb-3">
                    <label for="">Video Title</label>
                    <input type="text" name="title" class="custom-input" required>
                </div>
                <!-- add the youtube video here -->
                <div class="video-container">
                    <youtube :video-id="videoId" ref="youtube" width="100%" height="250"></youtube>
                </div>
                <v-row class="mb-3">
                    <v-col cols="4">
                        <div class="field mb-3">
                            <label for="">Start Time</label>
                            <input type="text" name="start_time" class="custom-input">
                        </div>
                        <div class="field">
                            <label for="">End Time</label>
                            <input type="text" name="start_time" class="custom-input">
                        </div>
                    </v-col>
                    <v-col cols="8">
                        <div class="field">
                            <label for="">Timestamps</label>
                            <div class="ml-5 mt-3 timestamps">
                                <div class="stamp" v-for="n in 10" :key="n">
                                    1.15
                                    <span style="text-align: right !important;">
                                        <a href="">start</a> | <a href="">end</a>
                                    </span>
                                </div>

                            </div>
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
            <v-col cols="7">
                <h5 class="text-center mb-3">Click the tabs to switch between contents</h5>
                <v-simple-table dense>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Sentence/Translation</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <strong>This is the sentence of the first content</strong> <br />
                                this is the translation
                            </td>
                            <td>1.15</td>
                            <td>2.25</td>
                            <td class="d-flex align-center justify-left">
                                <i class='bx bx-comment-detail mr-2' @click="showTips()"></i>
                                <i class='bx bxs-edit green--text mr-2'></i>
                                <i class='bx bx-trash red--text'></i>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>

        <TipsModal :show="tips"/>
    </v-container>
</template>

<script>
import Vue from "vue"
import VueYoutube from "vue-youtube"
import TipsModal from "@/components/modals/Tips"

Vue.use(VueYoutube)

export default {
    components: { TipsModal },
    data () {
        return {
            videoId: "qMXESlny4-I",
            inputs: [],
            tips: false
        }
    },
    computed: {
        player () {
            return this.$refs.youtube.player
        }
    },
    methods: {
        showTips () {
            this.tips = true
        }
    }
}
</script>

<style scoped>
    .video-container {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
    }

    .video-container iframe,
    .video-container object,
    .video-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .custom-input {
        border-bottom: 0 !important;
        border-radius: 0 !important;
        height: 40px;
        padding: 5px 15px;
        box-shadow: 3px 3px 8px rgb(208, 208, 208) !important;
        background-color: white;
        max-width: 500px;
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
        display: block;
    }

    button {
        font-weight: 400;
        border-radius: 0 !important;
    }

    .timestamps {
        height: 150px;
        overflow-y: scroll;
    }

    .stamp {
        display: flex;
        justify-content: space-between;
    }
    .stamp span {
        font-size: 0.8rem;
        color: rgb(3, 117, 218);
        margin-right: 10px;
    }

    .stamp span a {
        text-decoration: none;
        cursor: pointer;
    }
    .stamp span a:first-of-type {
        color: green;
    }

    i {
        cursor: pointer;
        font-size: 1.2rem;
    }
</style>
