<template>
    <v-card class="pa-5">
        <i class='bx bx-plus close-icon' @click="$emit('close', true)"></i>
        <v-card-text class="text-center">
            <div class="font-weight-light mt-5">Textbooks of Series</div>
            <h2 class="blue--text">Interview English</h2>

            <div id="textbook-wrapper">
                <div class="textbook" v-for="n in 3" :key="n">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKJlq7HOgwb6VYV2OoRcpRAL83grne6axo018osOe&s" alt="">
                    <div class="mt-3">
                        This is the title ajwndkjansdnkj
                    </div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ["seriesId"],
    mounted () {
        console.log("textbook component mounted")
    }
}
</script>

<style>
#textbook-wrapper {
    margin: 30px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 30px;
}

.textbook {
    position: relatve;
    width: 150px;
    height: 250px;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
}

.textbook img {
    position: relative;
}

.close-icon {
    position: absolute;
    right: 0;
    margin-right: 30px;
    font-size: 2rem;
    cursor: pointer;
    transform: rotate(45deg);
}
</style>
