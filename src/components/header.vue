<template>
	<header class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand" href="/">
				<img src="../assets/YANA_LOGO_rgb.jpg" width="30" height="30" alt="" />
			</a>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#nav-collapse"
				aria-controls="nav-collapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div id="nav-collapse" class="collapse navbar-collapse">
				<div class="navbar-nav ms-auto headerLinks">
					<router-link class="nav-item nav-link" to="/">
						<font-awesome-icon :icon="['fas', 'home']" />Home
					</router-link>
					<router-link class="nav-item nav-link" to="/aat">
						<font-awesome-icon :icon="['fas', 'paw']" />Animal Assisted Therapy
					</router-link>
					<router-link class="nav-item nav-link" to="/services"> Services </router-link>
					<router-link class="nav-item nav-link" to="/about">
						<font-awesome-icon :icon="['fas', 'sign']" />Our team
					</router-link>
					<router-link class="nav-item nav-link" to="/blog">
						<font-awesome-icon :icon="['fas', 'blog']" />Blog
					</router-link>
					<router-link class="nav-item nav-link" to="/contact">
						<font-awesome-icon :icon="['fas', 'envelope']" />Contact
					</router-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'AppHeader'
};
</script>

<style lang="scss" scoped>
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
	font:
		normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,
		sans-serif;
	color: #2c3e50;
	transition: color 0.4s ease 0s;
	white-space: nowrap;
	text-decoration: none;
}

.nav a.router-link-exact-active {
	color: #42b983;
}

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
