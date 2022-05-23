<template>
	<div class="container">
		<div class="container__text">
			<h5>About Me</h5>

			<p>
				Over the past 15 years I've worked with different age groups and organizations,such as schools, foster care,
				department of social affairs, victims services, residential care, nursing homes and addiction units.
			</p>
			<p>
				I'm a believer that most humans grow and heal best by doing. Working with animals offers us a hands on, active
				experience. Each animal, like humans has it's distinct personality, it provides us the needed space to project and
				analyze behaviours and situations while working on our goals.
			</p>
			<p>
				Transition and change create excitement and new opportunities, with that they summon various difficulties and at times
				not easy adjustments. Our daily lives and developmental stages within them, foster challenges and call for alternative
				coping strategies. Client- animal connection with the therapist's guidance and facilitation is active and based on
				various operations with the animal and for the animal.
			</p>
			<p>
				The emphasis on the doing during the sessions develops feelings of capability, reflected on our daily tasks and lives.
				Please reach out for more information, questions and consultation
			</p>
		</div>
		<div class="container__left">
			<img
				class="container__left__image"
				alt="Yana with Gucci and Churchill"
				title="Yana with Gucci and Churchill"
				src="../assets/20180514_165336_edited.jpg"
			/>
			<div class="flex-direction: column">
				<ul>
					<h4>Certifications:</h4>
					<li>Masters of Education and Leadership, Tel Aviv University</li>
					<li>
						Diploma in Animal Assisted Therapy, Magid school for Animal Assisted Interventions of the Hebrew
						University Jerusalem, recognized by International Association of Human-Animal Interaction
						Organizations (IAHAIO) and International Society for Animal Assisted Therapy (ISAAT)
					</li>
				</ul>

				<ul>
					<h4>Recognition:</h4>
					<li>
						Recognized by the Nova Scotia Legislature in April 2019 for "Yana is a tremendous support for her
						patients and is also an excellent coach for caregivers, social workers, and family members..."
						Honorable Patricia Arab, MLA for Fairview- Clayton Park (2019)
					</li>
				</ul>
			</div>
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
