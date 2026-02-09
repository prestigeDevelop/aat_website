<template>
	<main class="container">
		<div class="row">
			<div class="col-lg-12 col-md-auto">
				<p class="carousel-caption">Some text here 1</p>
				<div class="caption center-block">Test</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			mainProps: {
				center: true,
				fluidGrow: true,
				blank: false,
				blankColor: '#bbb',
				width: 800,
				height: 400,
				class: 'my-1'
			}
		};
	}
};
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	flex-grow: 1;
	@media screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
	}
}

.container > div {
	border: 0px #080a09 solid;
	flex: 1 1 0%;
}
.container > .img {
	border-radius: 0px;
}
.carousel-caption {
	bottom: auto;
	margin-top: 30px;
}
</style>
