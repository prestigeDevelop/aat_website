<template>
	<main class="container">
		<!-- <img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<userProfile /> -->
		<div class="title"><h5>Animal Assisted Therapy</h5></div>
		<section class="content">
			<aside class="left mt-1">
				Animal Assisted Therapy (AAT) is a therapeutic process based on the client's encounters with various animals.
				<p>It is a triangular interaction involving the client, therapist and animal.</p>
				<p>
					The encounter is immediate, direct and authentic, making the sessions comfortable, safe and free of judgement.
					Clients that likely to be anxious are comforted by the presence of an animal companion, often enhancing their
					motivation in therapy. This experience allows spontaneous reactions in front of an animal which, without words
					accepts an individual's story, beginning the therapeutic process where the client feels understood, supported
					and free to be themselves. The acceptance, creates an ideal atmosphere by opening the door to an inner world
					and helps the individual to bypass obstacles such as verbal expression or resistance to treatment.
				</p>
			</aside>
			<aside class="right">
				<img alt="aat" src="../assets/D724654_edited 812.jpg" title="Yana with Noya and Churchill" class="figure" />
			</aside>
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
			<p>
				Transition and change create excitement and new opportunities, with that they summon various difficulties and at times
				not easy adjustments. Our daily lives and developmental stages within them, foster challenges and call for alternative
				coping strategies. Client- animal connection with the therapist's guidance and facilitation is active and based on
				various operations with the animal and for the animal.
			</p>
			<p>
				The emphasis on the doing during the sessions develops feelings of capability, reflected on our daily tasks and lives.
			</p>
			<p>
				Please reach out for more information, questions and consultation
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
//.container {
//display: flex;
//flex-grow: 1;
//flex-direction: column;
//flex-basis: auto;

//justify-content: flex-start;
//align-items: flex-start;
//}

.content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 10px;

	@media screen and (max-width: 992px) {
		display: flex;
		flex-direction: column;
	}
}
.right {
	//border: 1px #42b983 solid;
	flex: 1 1 0%;
	.figure {
		flex-grow: 0;
		max-width: 100%;
	}
}

.left {
	flex: 1 1 0%;
	//border: 1px #42b983 solid;
	@media screen and (max-width: 600px) {
		width: 100%;
	}
}
.buttom {
	//border: 1px #42b983 solid;
	margin-top: 1%;
}
</style>
