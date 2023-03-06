<template>
    <v-container class="mt-5">
        <v-row>
            <v-col cols="9">
                <v-expansion-panels accordion flat>
                    <v-expansion-panel v-for="course in courses" :key="course">
                        <v-expansion-panel-header class="accordion-header">
                            <div class="courses-tabs">{{ course }}</div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="px-5">
                            <v-row>
                                <v-col cols="9">
                                    <v-list dense>
                                        <v-list-item-group>
                                            <v-list-item v-for="i in 10" :key="i">
                                                <v-list-item-content>
                                                    <div class="d-flex">
                                                        <i class='bx bxs-folder-open mr-3' style="color: #00a6e3"></i>
                                                        Course {{ i }}
                                                    </div>

                                                </v-list-item-content>
                                                <v-list-item-action>
                                                    <div class="d-flex">
                                                        <v-btn fab x-small color="primary" class="mr-2">
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
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            courses: ["Video Material", "Web Books", "Pagoda"]
        }
    }
}
</script>

<style scoped>

.accordion-header {
    border-bottom: 1px solid #eaeaea;
}
.courses-tabs {
    font-weight: 500;
    font-size: 1.8rem;
}

i.bx {
    font-size: 1rem;
}
</style>
