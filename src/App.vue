<template>
	<div id="app">
		<Header />

		<router-view />
	</div>
</template>

<script>
import Header from '@/components/header.vue';
export default {
	name: 'App',
	components: {
		Header
	}
};
</script>
<style lang="scss">
#app {
	//font-family: Avenir, Helvetica, Arial, sans-serif;
	font: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	//text-align: center;

	width: 100%;
	//padding: 0% 2% 2% 2%;
	border: 1px #42b983 solid;
}

h5 {
	font: normal normal bold 17px/1.5em lulo-clean-w01-one-bold, sans-serif;
	color: #94821b;
}
</style>
