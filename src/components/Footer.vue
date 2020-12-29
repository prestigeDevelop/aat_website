<template>
	<footer class="mt-auto py-3 bg-light">
		<div class="container">
			<div class="text-muted">Call: 902-229-7897</div>
			<div class="text-muted">Email: yanagoldaat@gmail.com</div>
			<div class="text-muted copyrights">© 2019 yanagoldaat.ca All Rights Reserved</div>
		</div>
	</footer>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'Footer',
	components: {}
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
footer {
	//border: 1px #42b983 solid;
	display: flex;
	flex-direction: row;
	align-self: center;

	width: 100%;
	// color: white;
	//text-align: center;
	//max-width: 1110px;
}
.container {
	display: flex;
	//align-content: center;
	align-items: center;
	@media screen and (max-width: 992px) {
		flex-direction: column;
		align-content: flex-start;
		align-items: flex-start;
	}
}

.container > div {
	font-size: 20px;
	//align-content: flex-start !important;
	//align-items: center;
	//align-self: center;
	//text-align: center;
	flex: 1 1 0%;
}
.copyrights {
	font-size: 15px !important;
}
// .bd-placeholder-img {
// 	font-size: 1.125rem;
// 	text-anchor: middle;
// 	-webkit-user-select: none;
// 	-moz-user-select: none;
// 	user-select: none;
// }

// @media (min-width: 768px) {
// 	.bd-placeholder-img-lg {
// 		font-size: 3.5rem;
// 	}
// }
</style>
