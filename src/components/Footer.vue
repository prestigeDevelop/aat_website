<template>
	<footer class="container mt-auto py-3 bg-light">
		<BRow>
			<BCol lg="5" md="auto">
				<p class="text-muted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-telephone-fill"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
						/>
					</svg>
					<a href="tel:9022297897">Call 902-229-7897</a>
				</p>
				<p class="location">Located in Upper Tantallon, Nova Scotia</p>
			</BCol>
			<BCol lg="3" md="auto">
				<p class="text-muted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-envelope-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
						/>
					</svg>
					yanagoldaat@gmail.com
				</p>
			</BCol>
			<BCol lg="4" md="auto">
				<p class="text-muted copyrights">© 2019 yanagoldaat.ca All Rights Reserved</p>
			</BCol>
		</BRow>
		<!-- <BRow>
			<BCol lg="12" md="auto">
				<p class="location row justify-content-center align-items-center">Located in Upper Tantallon,Nova Scotia</p>
			</BCol>
		</BRow> -->
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
// footer {
// 	border: 1px #434644 solid;
// }
.container {
	@media screen and (max-width: 992px) {
		flex-direction: column;
		align-content: flex-start;
		align-items: flex-start;
	}
}

.container > div {
	font-size: 20px;
	//flex: 1 1 0%;
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
a {
	color: #94821b !important;
}

.location {
	color: #94821b !important;
}
</style>
