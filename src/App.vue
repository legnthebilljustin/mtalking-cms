<template>
	<v-app>
		<v-main>
			<router-view/>
		</v-main>
	</v-app>
</template>

<script>

export default {
    name: "App",

    data: () => ({
    //
    })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
* {
	font-family: 'Montserrat', sans-serif;
}
</style>
