<template>
	<div class="container">
		<div class="row">
			<div class="col-lg col-md-auto">
				<h1>Our Team</h1>

				<p>
					Over the past 16 years I've worked with children, youth and families. People from different backgrounds and
					abilities, different voices and stories, needs and age groups. Throughout my practice as an Animal Assisted
					Therapist I've been supporting professionals and clients through a variety of organizations such as;
					Department of Education- daycares and schools. Department of Social Affairs and Community Services, victim
					services, care facilities, nursing homes and addiction units.
				</p>
				<p>
					I'm a believer that most humans grow and heal best by doing. Working together with animals and for the animals
					offers us a hands-on, active experience, safe and comfortable for all, at times challenging as any process of
					growth and development. Each animal, like humans, has its distinct personality, it provides us the needed
					space with therapists navigation to project and analyze behaviours and situations while working on our goals.
				</p>
				<p>
					Based in Upper Tantallon, Nova Scotia, we proudly serve families throughout Halifax, Bedford, Dartmouth
					and the wider Halifax Regional Municipality. Please don't hesitate to reach out for further conversation
					and learn how Animal Assisted Therapy services can help.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img
						alt="aat"
						src="../assets/20180514_165336_edited.jpg"
						title="Yana with Gucci and Churchill"
						class="responsive-img"
						loading="lazy"
					/>
				</aside>
			</div>
			<div class="col-lg-8 col-md-auto">
				<h4>Certifications:</h4>
				<ul>
					<li>Masters of Education and Leadership, Tel Aviv University</li>
					<li>
						Diploma in Animal Assisted Therapy, Magid school for Animal Assisted Interventions of the Hebrew
						University Jerusalem, recognized by International Association of Human-Animal Interaction
						Organizations (IAHAIO) and International Society for Animal Assisted Therapy (ISAAT)
					</li>
				</ul>
				<p class="ps-3">
					Recognized by the Nova Scotia Legislature in April 2019<br />
					<cite
						>"Yana is a tremendous support for her patients and is also an excellent coach for caregivers, social
						workers, and family members..."</cite
					>
					Honorable Patricia Arab, MLA for Fairview- Clayton Park (2019)
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 col-md-auto">
				<div class="container">
					<section class="p-md-3 mx-md-5 text-center text-lg-start">
						<h5 class="text-center fw-bold mb-0 pb-0">Meet some of the staff</h5>
					</section>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/sammy.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/churchill.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right" style="height: 354px">
					<img alt="aat" src="../assets/henry_crop.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/noya.png" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/freud.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/lumpa.png" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/Humphrey4.jpeg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/Bernardo1.jpeg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="Chewie" src="../assets/chewie.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/steve.jpg" loading="lazy" class="responsive-img" />
				</aside>
			</div>
			<div class="col-lg-4 col-md-auto">
				<aside class="right">
					<img alt="aat" src="../assets/martin.jpg" loading="lazy" class="responsive-img" />
				</aside>
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
	display: flex;
	flex-direction: column;
}
.right {
	display: flex;
}

p {
	font-size: 1.2rem;

	@media (max-width: 768px) {
		font-size: 1rem; // Reduce size on mobile
		line-height: 1.6;
	}
}

.responsive-img {
	width: 100%;
	height: 340px; // Default for desktops
	border-radius: 4px;
	margin-top: 4px;
	object-fit: inherit;

	@media (max-width: 768px) {
		height: auto; // Adjust for smaller screens
	}
	@media (max-width: 480px) {
		max-height: auto; // Adjust for mobile
	}
}
</style>
