/* eslint-disable prettier/prettier */
<template>
	<main class="container">
		<!-- <section class="content"> -->
		<div class="sessions">
			<h5>One on One sessions</h5>
			<p>
				The therapeutic process usually consists of four introduction sessions (creating initial connection, trust, goal
				settings), sixteen process sessions and four separation sessions.
			</p>
			<p>
				Each session is 45 minutes long and their frequency is weekly. This is dynamic and depends on the client, their needs,
				goals and possibilities.
			</p>
			<p>Please feel free to contact me with any questions or for additional information.</p>
		</div>
		<div class="workshops">
			<h5>Workshops and Presentations</h5>
			<p>
				Experiential and interactive full day/half day workshops and presentations. Workshops can be provided with or without
				animals.
			</p>
			<section>
				<h4>Current options:</h4>
				<ul>
					<li>Animal Assisted Therapy for Trauma</li>
					<li>Human-Animal Bond and Our Wellness</li>
					<li>Shifting From Changes to Opportunities</li>
					<li>Interpersonal Effective Communication</li>
					<li>Emotional Intelligence in a Workplace</li>
					<li>Conflict Resolution</li>
				</ul>
			</section>
			<p>
				Please contact to discuss custom workshops and presentations that will meet your personal and organizational interests
				and needs.
			</p>
		</div>
		<!-- </section> -->
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
	flex-grow: 1;
	@media screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
	}
}
// .content {
// 	display: flex;
// 	//default properties
// 	justify-content: flex-start;
// 	align-items: flex-start;
// }

.container > div {
	//border: 1px #42b983 solid;
	flex: 1 1 0%;
	//padding: 8px;
}

.sessions {
	padding-right: 50px;
	@media screen and (max-width: 992px) {
		padding-right: 0px;
	}
}

.workshops {
	padding-left: 50px;
	@media screen and (max-width: 992px) {
		padding-left: 0px;
	}
}
</style>
