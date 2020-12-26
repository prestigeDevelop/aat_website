<template>
	<header>
		<BNavbar toggleable="lg" class="m-0 pt-0 pb-1 navBar">
			<BNavbarToggle target="nav-collapse"><strong>= Menu</strong> </BNavbarToggle>
			<BCollapse id="nav-collapse" is-nav>
				<BNavbarNav class="ml-auto headerLinks ">
					<BNavItem class="">
						<img alt="aat logo" class="flex-grow-1" src="../assets/YANA_LOGO_rgb.jpg" />
					</BNavItem>
					<!-- <div id="pages"> -->
					<BNavItem class="nav">
						<router-link to="/"><font-awesome-icon :icon="['fas', 'home']" />Home</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/about">
							<font-awesome-icon :icon="['fas', 'paw']" />Animal Assisted Therapy
						</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/about">
							Services
						</router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/about"> <font-awesome-icon :icon="['fas', 'sign']" />About Me </router-link>
					</BNavItem>
					<BNavItem class="nav">
						<router-link to="/about"> <font-awesome-icon :icon="['fas', 'envelope']" />Contact </router-link>
					</BNavItem>
					<!-- </div> -->
				</BNavbarNav>
			</BCollapse>
		</BNavbar>
	</header>
</template>

<script>
// import { BNavbarBrand, BCollapse, BNavItem, BNavbar, BNavbarNav } from 'bootstrap-vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
	name: 'AppHeader',

	components: {
		// BNavbarBrand,
		// BNavbar,
		// BCollapse,
		// BNavbarNav,
		// BNavItem
	}
})
export default class AppHeader extends Vue {}
</script>

<style lang="scss" scoped>
#container {
	//display: flex;
	display: grid;
	grid-gap: 10%;
	grid-template-columns: 1fr 3fr;
	flex-direction: row;
	justify-content: right;
	border: 1px #42b983 solid;
	align-items: center;
}
header {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: #ffff;
	margin: 0 0 20px 0;
	padding: 0;
	box-shadow: 0px 0px 6px 2px #8f8f8f;
}

header .nav {
	//border: 1px #42b983 solid;
	align-items: center;
	//transition: color 0.4s ease 0s;
	margin-left: 2%;
	margin-right: 2%;
}

.navbar {
	display: flex;
	justify-content: space-between;
	text-align: left;
	// hack to make IE behave
	@media all and (-ms-high-contrast: none) {
		height: 50px;
	}
}
img {
	width: 200px;
	height: 170px;
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

.headerlinks {
	display: grid;
	grid-template-columns: 0.5fr 0.5fr;
}
h1,
.h1 {
	font-size: 30px;
	line-height: 25px;
}
.btn {
	color: black !important;
	margin-bottom: 0px;
}
.navbar-toggler {
	color: black !important;
}

.nav-link {
	padding: 0;
}
.navbar-brand {
	white-space: normal;
	cursor: pointer;
}
svg {
	margin-right: 0.5em;
}
</style>
