<template>
    <v-container class="mt-5">
        <h2 class="blue--text font-weight-regular">Specialized Job Preparation Course</h2>
        <div class="font-weight-light font-italic mb-5">Webbooks</div>
        <v-list max-width="700">
            <v-list-item v-for="(item, index) in series" :key="index" class="list-item">
                <v-list-item-content>
                    <div @click="showTextbooks = true" v-html="item"></div>
                </v-list-item-content>
                <v-list-item-action>
                    <div class="d-flex">
                        <v-btn fab x-small color="green" class="mr-2">
                            <i class='bx bxs-show white--text'></i>
                        </v-btn>
                        <!-- <v-btn fab x-small color="orange" class="mr-2">
                            <i class='bx bxs-low-vision white--text'></i>
                        </v-btn> -->
                        <v-btn fab x-small color="primary" class="mr-2">
                            <i class='bx bxs-edit white--text'></i>
                        </v-btn>
                        <v-btn fab x-small color="error">
                            <i class='bx bx-trash white--text'></i>
                        </v-btn>
                    </div>
                </v-list-item-action>
            </v-list-item>
        </v-list>
        <template v-if="showTextbooks">
            <v-dialog v-model="showTextbooks" max-width="600">
                <TextBooks seriesId="1" @close="showTextbooks = false"/>
            </v-dialog>
        </template>
    </v-container>
</template>

<script>
import TextBooks from "@/components/webbooks/TextBooks.vue"
export default {
    components: { TextBooks },
    data () {
        return {
            series: ["Interview English", "Hotel Dialgoues", "Cabin Crew", "IELTS", "Global Medical English"],
            showTextbooks: false
        }
    }
}
</script>

<style>
    i {
        font-size: 1rem;
    }
    .list-item:hover {
        cursor: pointer;
        background: #ededed;
        transition: all 0.3s ease-in-out;
        font-weight: 500;
    }
</style>
