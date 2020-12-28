<template>
	<div id="app" class="d-flex flex-column h-100">
		<Header />

		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/Footer.vue';
export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
};
</script>
<style lang="scss">
#app {
	//font-family: Avenir, Helvetica, Arial, sans-serif;
	font: normal normal normal 16px/1.4em avenir-lt-w01_35-light1475496, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	//border: 1px #42b983 solid;
}

h5 {
	font: normal normal bold 19px/1.5em lulo-clean-w01-one-bold, sans-serif !important;
	color: #94821b !important;

	//font-size: 100pt !important;
	//font-family: 'Baskerville Old Face', Garamond, serif !important;
	//font-weight: bold !important;
	//font-style: italic !important;
}
#header,
#footer {
	text-align: center;
	padding: 20px;
}
</style>
