<template>
	<!--<main class="content">
		 <section class="content">
			<h5>About Me</h5>
			<div class="left">
				<p>
					I'm a believer that most humans grow and heal best by doing. Working with animals offers us a hands on, active
					experience. Each animal, like humans has it's distinct personality, it provides us the needed space to project
					and analyze behaviours and situations while working on our goals.
				</p>
				<p>
					Over the past 15 years I've worked with different age groups and organizations,such as schools, foster care,
					department of social affairs, victims services, residential care, nursing homes and addiction units.
				</p>
				<p>
					In 2015 I immigrated from Israel and am now a proud Canadian citizen. I currently live in Upper Tantallon with
					my husband and daughter. Surrounded with loyal animal companions.
				</p>
			</div>
			<div class="right">
				<img alt="aat" src="../assets/20180514_165336_edited.jpg" class="figure" />
			</div>
			<h4>Certifications:</h4>
			<ul>
				<li>Masters of Education and Leadership, Tel Aviv University</li>
				<li>
					Diploma in Animal Assisted Therapy, Magid school for Animal Assisted Interventions of the Hebrew University
					Jerusalem, recognized by International Association of Human-Animal Interaction Organizations (IAHAIO) and
					International Society for Animal Assisted Therapy (ISAAT)
				</li>
			</ul>
		</section> </main>-->
	<div class="container">
		<div class="container__text">
			<h5>About Me</h5>
			<p>
				I'm a believer that most humans grow and heal best by doing. Working with animals offers us a hands on, active
				experience. Each animal, like humans has it's distinct personality, it provides us the needed space to project and
				analyze behaviours and situations while working on our goals.
			</p>
			<p>
				Over the past 15 years I've worked with different age groups and organizations,such as schools, foster care,
				department of social affairs, victims services, residential care, nursing homes and addiction units.
			</p>
			<!-- <p>
				In 2015 I immigrated from Israel and am now a proud Canadian citizen. I currently live in Upper Tantallon with my
				husband and daughter. Surrounded with loyal animal companions.
			</p> -->
		</div>
		<div class="container__left">
			<img
				class="container__left__image"
				alt="Yana with Gucci and Churchill"
				title="Yana with Gucci and Churchill"
				src="../assets/20180514_165336_edited.jpg"
			/>

			<ul>
				<h4>Certifications:</h4>
				<li>Masters of Education and Leadership, Tel Aviv University</li>
				<li>
					Diploma in Animal Assisted Therapy, Magid school for Animal Assisted Interventions of the Hebrew University
					Jerusalem, recognized by International Association of Human-Animal Interaction Organizations (IAHAIO) and
					International Society for Animal Assisted Therapy (ISAAT)
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	components: {}
};
</script>
<style lang="scss" scoped>
.container {
	//border: 1px solid blue;
	//padding: 20px 40px 40px;
	//max-width: 640px;
	display: flex;
	flex-direction: column;

	&__text {
		flex: 1 1 0%;
	}
	&__left {
		display: flex;

		@media screen and (max-width: 992px) {
			flex-wrap: wrap;
		}
		&__div {
			flex: 1 1 0%;
		}
		&__image {
			margin: 0px 0px 0px 0px;
			flex: 1 1 0%;
			max-width: 500px;
			align-self: flex-start;
			object-fit: contain;
		}
	}
}
</style>
