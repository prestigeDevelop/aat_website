/* eslint-disable prettier/prettier */
<template>
	<main class="container">
		<div class="row">
			<div class="col-lg-6 col-md-auto">
				<div class="sessions">
					<h2>One on One sessions</h2>
					<p>
						Each session is 50 minutes long and their frequency is weekly. This is dynamic and depends on the
						client, their needs, goals and possibilities.
					</p>
					<p>Please feel free to contact me with any questions or for additional information.</p>
				</div>
				<div class="col-lg col-md-auto p-0">
					<aside class="right">
						<img
							alt="aat"
							src="../assets/Animalsinaction.png"
							title="Yana with Noya and Churchill"
							loading="lazy"
						/>
					</aside>
				</div>
			</div>
			<div class="col-lg-6 col-md-auto">
				<div class="workshops">
					<h2>Workshops and Presentations</h2>
					<p>
						Experiential and interactive full day/half day workshops and presentations. Workshops can be provided
						with or without animals.
					</p>
					<p>
						Please contact to discuss custom workshops and presentations that will meet your personal and
						organizational interests and needs.
					</p>
				</div>
				<div class="col-lg col-md-auto p-0">
					<aside class="right">
						<!-- <img alt="aat" src="../assets/20_HDR_4.png" title="Yana with Noya and Churchill" /> -->
					</aside>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'Services',
	components: {}
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
	//border: 1px #42b983 solid;
	flex: 1 1 0%;
}

.sessions {
	padding-right: 50px;
	min-width: 300px;
	@media screen and (max-width: 992px) {
		padding-right: 0px;
	}
}

.workshops {
	padding-left: 50px;
	min-width: 300px;
	@media screen and (max-width: 992px) {
		padding-left: 0px;
	}
}

.right {
	display: flex;
}

.right img {
	width: 100%;
	object-fit: contain;
	border-radius: 4px;
}
</style>
