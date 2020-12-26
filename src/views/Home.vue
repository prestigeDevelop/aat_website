<template>
	<main class="container">
		<!-- <img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<userProfile /> -->
		<h5>Animal Assisted Therapy</h5>
		<section class="content">
			<aside class="right">
				<p>
					Animal Assisted Therapy (AAT) is a therapeutic process based on the client's encounters with various
					animals.It is a triangular interaction involving the client, therapist and animal. The encounter is immediate,
					direct and authentic. Making the sessions comfortable, safe and free of judgement. Clients that likely to be
					anxious are comforted by the presence of an animal companion, often enhancing their motivation in therapy.
					This experience allows spontaneous reactions in front of an animal which, without words accepts an
					individual's story, beginning the therapeutic process where the client feels understood, supported and free to
					be themselves. The acceptance, creates an ideal atmosphere by opening the door to an inner world and helps the
					individual to bypass obstacles such as verbal expression or resistance to treatment.
				</p>
			</aside>
			<aside class="left"><img alt="aat" src="../assets/_D724654.jpg" class="figure" /></aside>
		</section>
		<section class="buttom">
			<p>
				Therapeutic Interventions with Animals is an active process that can support individuals who experience emotional
				disturbances and behavioural problems, depression, various states of stress and anxiety, PTSD and complex PTSD, family
				and relationship problems, social skills challenges, physical disabilities, impaired communication, PDD, ADD, ADHD,
				OCD, Down Syndrome, addictions and eating disorders, victims of abuse and trauma, the elderly and those in
				rehabilitation. Animal Assisted Therapy enables a reflection of mental, cognitive and behavioural processes that lead
				to a journey of growth.
			</p>
		</section>
	</main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import userProfile from '@/components/UserProfile.vue';

export default {
	name: 'Home',
	components: {}
};
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: stretch;
}

.content {
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 10px;
	padding-top: 3%;
}
.left {
	align-self: flex-start;
	border: 1px #42b983 solid;
	@media screen and (max-width: 600px) {
		display: none;
	}
	.figure {
		flex: 1 1 30%;
		width: 455;
		height: 303px;
		@media screen and (max-width: 992px) {
			width: 350;
			height: 250px;
		}
		@media screen and (max-width: 600px) {
			width: 200px;
			height: 150px;
		}
	}
}

.right {
	flex: 1 1 60%;
	border: 1px #42b983 solid;
}

// .buttom {

// }
</style>
