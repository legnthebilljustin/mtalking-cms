<template>
    <v-container class="mt-5">
        <v-row>
            <v-col>
                <h2 class="blue--text font-weight-regular">Interview English Step 1</h2>
                <div class="font-weight-light font-italic mb-5">Webbooks - Specialized Job Preparation Course - Interview English</div>
            </v-col>
            <v-col>
                <v-btn v-for="(icon, i) in icons" :key="i"
                    fab small dense
                    :color="icon.color"
                    class="ml-2"
                >
                    <i :class="icon.class"></i>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list max-width="800">
                    <v-list-item-group>
                        <v-list-item v-for="(unit, index) in units" :key="index">
                            <v-list-item-content>
                                {{ unit }}
                            </v-list-item-content>
                            <v-list-item-action>
                                <div class="d-flex">
                                    <v-btn fab x-small color="green" class="mr-2">
                                        <i class='bx bxs-edit white--text'></i>
                                    </v-btn>
                                    <v-btn fab x-small color="error">
                                        <i class='bx bx-trash white--text'></i>
                                    </v-btn>
                                </div>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            icons: [
                { class: "bx bx-plus", color: "primary" },
                { class: "bx bx-edit-alt", color: "green" },
                { class: "bx bx-trash", color: "error" }
            ],
            units: [
                "Unit 01: Tell me about your self", "Unit 02: What is your major?", "Unit 03: What made you choose your university",
                "Unit 04: What are your work experiences", "Unit 05: What interests you about this job?", "Unit 06: What can you do for this company?"
            ]
        }
    },
    mounted () {

    }
}
</script>

<style>
    i {
        color: white;
        font-size: 1.2rem;
    }
</style>
