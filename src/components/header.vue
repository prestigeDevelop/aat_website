<template>
	<header class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="/">
				<img src="../assets/YANA_LOGO_rgb.jpg" width="30" height="30" alt="" />
			</a>

			<BNavbarToggle
				target="nav-collapse"
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				aria-controls="nav-collapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
				><strong><span class="navbar-toggler-icon"></span></strong>
			</BNavbarToggle>

			<BCollapse id="nav-collapse" is-nav>
				<BNavbarNav class="ml-auto headerLinks ">
					<div class="navbar-nav">
						<!-- <a class="nav-item nav-link active" href="/home"
							><font-awesome-icon :icon="['fas', 'home']" />Home <span class="sr-only">(current)</span></a
						> -->
						<router-link class="nav-item nav-link " to="/"
							><font-awesome-icon :icon="['fas', 'home']" />Home</router-link
						>
						<router-link class="nav-item nav-link" to="/aat">
							<font-awesome-icon :icon="['fas', 'paw']" />Animal Assisted Therapy</router-link
						>
						<router-link class="nav-item nav-link" to="/services">
							Services
						</router-link>
						<router-link class="nav-item nav-link" to="/about">
							<font-awesome-icon :icon="['fas', 'sign']" />Our team</router-link
						>
						<router-link class="nav-item nav-link" to="/blog">
							<font-awesome-icon :icon="['fas', 'blog']" />Blog
						</router-link>
						<router-link class="nav-item nav-link" to="/contact">
							<font-awesome-icon :icon="['fas', 'envelope']" />Contact</router-link
						>
						<!-- <router-link class="nav-item nav-link" to="/gallery">Gallery</router-link> -->
					</div>
				</BNavbarNav>
			</BCollapse>
		</nav>
		<!-- <BNavbar toggleable="lg" class="m-0 pt-0 pb-1 navBar">
			<img alt="aat logo" class="flex-grow-0" src="../assets/YANA_LOGO_rgb.jpg" />
			<BNavbarToggle target="nav-collapse"><strong>= Menu</strong> </BNavbarToggle>
			<BCollapse id="nav-collapse" is-nav>
				<BNavbarNav class="ml-auto headerLinks ">
					<BNavItem class="nav">
						<router-link to="/"><font-awesome-icon :icon="['fas', 'home']" />Home</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/aat">
							<font-awesome-icon :icon="['fas', 'paw']" />Animal Assisted Therapy</router-link
						>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/services">
							Services
						</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/about"> <font-awesome-icon :icon="['fas', 'sign']" />About Me</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/contact"> <font-awesome-icon :icon="['fas', 'envelope']" />Contact</router-link>
					</BNavItem>
				</BNavbarNav>
			</BCollapse>
		</BNavbar> -->
	</header>
</template>

<script>
// import { BNavbarBrand, BCollapse, BNavItem, BNavbar, BNavbarNav } from 'bootstrap-vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'AppHeader',

	components: {}
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
// #container {
// 	//display: flex;
// 	//display: grid;
// 	//grid-gap: 10%;
// 	//grid-template-columns: 1fr 3fr;
// 	flex-direction: row;
// 	justify-content: right;
// 	border: 1px #42b983 solid;
// 	align-items: center;
// 	// @media screen and (max-width: 600px) {
// 	// 	display: flex;
// 	// 	flex-direction: column;
// 	// }
// }
// header {
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: wrap;

// 	background-color: #ffff;
// 	margin-bottom: 20px;
// 	box-shadow: 0px 0px 6px 2px #8f8f8f;
// }

header .nav {
	border: 1px #42b983 solid;
	align-items: center;
	flex-grow: 1;
}

.navbar {
	flex-grow: 1;
	@media screen and (max-width: 1020px) {
		flex-direction: row nowrap;
	}
	// hack to make IE behave
	@media all and (-ms-high-contrast: none) {
		height: 50px;
	}
	//background-image: url('../assets/header4.jpeg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
img {
	width: 200px;
	height: 170px;
	max-width: 100%;
	object-fit: cover;
}

.nav a {
	font: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496, sans-serif;
	color: #2c3e50;
	transition: color 0.4s ease 0s;
	white-space: nowrap;
	text-decoration: none;
}

.nav a.router-link-exact-active {
	color: #42b983;
}

// .headerlinks {
// 	display: grid;
// 	grid-template-columns: 0.5fr 0.5fr;
// }
// h1,
// .h1 {
// 	font-size: 30px;
// 	line-height: 25px;
// }
// .btn {
// 	color: black !important;
// 	margin-bottom: 0px;
// }
// .navbar-toggler {
// 	color: black !important;

// 	&.collapsed {
// 		@media screen and (max-width: 1020px) {
// 			float: right;
// 		}
// 	}
// }

.nav-link {
	padding: 0;
	margin: 10px;
	transition: font-size 0.2s 0.1s;
}

.nav-link:hover {
	font-size: 17px;
}
.navbar-brand {
	white-space: normal;
	cursor: pointer;
}
</style>
