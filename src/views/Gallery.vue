<template>
	<main class="container">
		<BRow>
			<BCol lg="12" md="auto">
				<p class="carousel-caption">Some text here 1</p>
				<div class="caption center-block">Test</div>
				<!-- <b-img-lazy v-bind="mainProps" src="../assets/gallery/img-1.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<p class="carousel-caption">Some text here 2</p>
				<div class="caption center-block">Test</div>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-2.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<p class="carousel-caption">Some text here 3</p>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-9.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<p class="carousel-caption">Some text here 4</p>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-10.jpg" alt="Image 1" thumbnail></b-img-lazy> -->
				<!-- <b-img-lazy v-bind="mainProps" src="../assets/gallery/img-3.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-4.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-5.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-6.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-7.jpg" alt="Image 1" thumbnail></b-img-lazy>
				<b-img-lazy v-bind="mainProps" src="../assets/gallery/img-8.jpg" alt="Image 1" thumbnail></b-img-lazy>
				
				 -->

				<!-- <b-img-lazy v-bind="mainProps" :src="getImageUrl(1)" alt="Image 1"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(2)" alt="Image 2"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(3)" alt="Image 3"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(4)" alt="Image 4"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(5)" alt="Image 5"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(6)" alt="Image 6"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(7)" alt="Image 7"></b-img-lazy>
				<b-img-lazy v-bind="mainProps" :src="getImageUrl(8)" alt="Image 8"></b-img-lazy> -->
			</BCol>
		</BRow>
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
	},
	methods: {
		getImageUrl(imageId) {
			//const { width, height } = this.mainProps;
			//return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
			return `/assets/gallery/img-${imageId}.jpg`;
		}
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
