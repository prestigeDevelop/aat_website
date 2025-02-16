<!-- <template>
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
		<BRow>
			<BCol lg="12" md="auto">
				<div class="social-media"></div>
				<p class="text-muted copyrights">© 2019 yanagoldaat.ca All Rights Reserved</p>
				<p class="text-muted">
					<a href="https://www.instagram.com/yanagoldaat?utm_source=qr&igsh=eW82b2k5ZXoxb2w0" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-instagram"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C5.8 0 5.5 0 4.7.1 3.9.2 3.3.4 2.8.7c-.5.3-.9.7-1.2 1.2-.3.5-.5 1.1-.6 1.9C.9 4.5.9 4.8.9 8s0 3.5.1 4.3c.1.8.3 1.4.6 1.9.3.5.7.9 1.2 1.2.5.3 1.1.5 1.9.6.8.1 1.1.1 4.3.1s3.5 0 4.3-.1c.8-.1 1.4-.3 1.9-.6.5-.3.9-.7 1.2-1.2.3-.5.5-1.1.6-1.9.1-.8.1-1.1.1-4.3s0-3.5-.1-4.3c-.1-.8-.3-1.4-.6-1.9-.3-.5-.7-.9-1.2-1.2-.5-.3-1.1-.5-1.9-.6C11.5.1 11.2 0 8 0zm0 1.5c2.2 0 2.5 0 3.3.1.7.1 1.1.2 1.4.4.3.2.6.4.8.8.2.3.3.7.4 1.4.1.8.1 1.1.1 3.3s0 2.5-.1 3.3c-.1.7-.2 1.1-.4 1.4-.2.3-.4.6-.8.8-.3.2-.7.3-1.4.4-.8.1-1.1.1-3.3.1s-2.5 0-3.3-.1c-.7-.1-1.1-.2-1.4-.4-.3-.2-.6-.4-.8-.8-.2-.3-.3-.7-.4-1.4-.1-.8-.1-1.1-.1-3.3s0-2.5.1-3.3c.1-.7.2-1.1.4-1.4.2-.3.4-.6.8-.8.3-.2.7-.3 1.4-.4.8-.1 1.1-.1 3.3-.1zM8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 6.7a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm4.9-6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
							/>
						</svg>
						Follow us on Instagram
					</a>
				</p>
			</BCol>
		</BRow>
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
.container {
	@media screen and (max-width: 992px) {
		flex-direction: column;
		align-content: flex-start;
		align-items: flex-start;
	}
}

.container > div {
	font-size: 20px;
}
.copyrights {
	font-size: 15px !important;
}

a {
	color: #94821b !important;
}

.location {
	color: #94821b !important;
}
</style> -->

<template>
	<footer class="container-fluid mt-auto py-3 bg-light">
		<BRow class="justify-content-between align-items-center">
			<BCol lg="4" md="12" class="text-center text-lg-start mb-3 mb-lg-0">
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
			<BCol lg="4" md="12" class="text-center mb-3 mb-lg-0">
				<p class="text-muted">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-envelope-fill"
						viewBox="0 0 16 16"
					>
						<defs>
							<linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" style="stop-color:#f09433;stop-opacity:1" />
								<stop offset="25%" style="stop-color:#e6683c;stop-opacity:1" />
								<stop offset="50%" style="stop-color:#dc2743;stop-opacity:1" />
								<stop offset="75%" style="stop-color:#cc2366;stop-opacity:1" />
								<stop offset="100%" style="stop-color:#bc1888;stop-opacity:1" />
							</linearGradient>
						</defs>
						<rect width="24" height="24" fill="url(#instagramGradient)" />
						<path
							d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
						/>
					</svg>
					yanagoldaat@gmail.com
				</p>
			</BCol>
			<BCol lg="4" md="12" class="text-center text-lg-end">
				<p class="text-muted">
					<a href="https://www.instagram.com/yanagoldaat?utm_source=qr&igsh=eW82b2k5ZXoxb2w0" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							class="bi bi-instagram"
							viewBox="0 0 16 16"
						>
							<path
								d="M8 0C5.8 0 5.5 0 4.7.1 3.9.2 3.3.4 2.8.7c-.5.3-.9.7-1.2 1.2-.3.5-.5 1.1-.6 1.9C.9 4.5.9 4.8.9 8s0 3.5.1 4.3c.1.8.3 1.4.6 1.9.3.5.7.9 1.2 1.2.5.3 1.1.5 1.9.6.8.1 1.1.1 4.3.1s3.5 0 4.3-.1c.8-.1 1.4-.3 1.9-.6.5-.3.9-.7 1.2-1.2.3-.5.5-1.1.6-1.9.1-.8.1-1.1.1-4.3s0-3.5-.1-4.3c-.1-.8-.3-1.4-.6-1.9-.3-.5-.7-.9-1.2-1.2-.5-.3-1.1-.5-1.9-.6C11.5.1 11.2 0 8 0zm0 1.5c2.2 0 2.5 0 3.3.1.7.1 1.1.2 1.4.4.3.2.6.4.8.8.2.3.3.7.4 1.4.1.8.1 1.1.1 3.3s0 2.5-.1 3.3c-.1.7-.2 1.1-.4 1.4-.2.3-.4.6-.8.8-.3.2-.7.3-1.4.4-.8.1-1.1.1-3.3.1s-2.5 0-3.3-.1c-.7-.1-1.1-.2-1.4-.4-.3-.2-.6-.4-.8-.8-.2-.3-.3-.7-.4-1.4-.1-.8-.1-1.1-.1-3.3s0-2.5.1-3.3c.1-.7.2-1.1.4-1.4.2-.3.4-.6.8-.8.3-.2.7-.3 1.4-.4.8-.1 1.1-.1 3.3-.1zM8 3.9a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm0 6.7a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2zm4.9-6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
							/>
						</svg>
						Follow us on Instagram
					</a>
				</p>
				<p class="text-muted copyrights">© 2019 yanagoldaat.ca All Rights Reserved</p>
			</BCol>
		</BRow>
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
	.container-fluid {
		padding-left: 15px;
		padding-right: 15px;
	}

	.text-muted {
		font-size: 16px;
	}

	.copyrights {
		font-size: 14px !important;
	}

	a {
		color: #94821b !important;
	}

	.location {
		color: #94821b !important;
	}

	@media (max-width: 992px) {
		.text-center {
			text-align: center !important;
		}

		.text-lg-start {
			text-align: center !important;
		}

		.text-lg-end {
			text-align: center !important;
		}

		.mb-3 {
			margin-bottom: 1rem !important;
		}
	}
}
</style>
