<template>
	<main class="container">
		<!-- <img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<userProfile /> -->
		<div class="title"><h1>Welcome to Animal Assisted Therapy</h1></div>
		<section class="content">
			<aside class="left mt-1">
				<p>
					At our practice, we utilize the special nature and personality traits of different animals to support people
					of all ages and abilities improve their mental and physical health. From dogs and fish to rabbits and birds,
					our trained therapist and animals provide a unique and therapeutic experience.
				</p>
				<h2>What is Animal Assisted Therapy?</h2>
				<p>
					<router-link to="/aat"><b>Animal assisted Therapy</b> </router-link> (AAT) is a therapy based on client’s work
					with the therapist and animals. This is a triangular interaction involving various therapeutic approaches and
					activities with animals to promote client’s goals in overcoming physical/ behavioural/ emotional challenges.
					Research has shown that AAT presents with a number of benefits, including:
				</p>
				<ul>
					<li>Reducing Stress and Anxiety</li>
					<li>Developing Emotional Regulation</li>
					<li>Overcoming various Challenges, and Trauma Symptoms</li>
					<li>Providing a sense of Purpose, Meaning and Self Esteem</li>
					<li>Encouraging physical activity and mobility</li>
				</ul>
				<p>AAT addresses and has a positive impact on behaviours and conditions like:</p>
				<ul>
					<li>Anxiety</li>
					<li>Emotional Support and Regulation</li>
					<li>Aggression</li>
					<li>Healthy Relationships, Communication</li>
					<li>Trauma</li>
					<li>Grief and Loss</li>
					<li>Developmental Disorders</li>
					<li>Behavioral Difficulties</li>
					<li>Rehabilitation</li>
				</ul>
				<h2>Our Animals</h2>
				<p>
					We are lucky to have a diverse team of animals who help us provide therapy to our clients. Here are just a few
					of the animals you might meet during a session:
				</p>
				<ul>
					<li>Dogs</li>
					<li>Reptiles</li>
					<li>Rabbits</li>
					<li>Birds</li>
				</ul>

				<h2>Meet Our Team</h2>
				<p>
					<router-link to="/about"><b>Our team</b> </router-link> is passionate about woking with people and animals
					while supporting development, and enhancing growth and healing. They have a range of qualifications and
					experience, and are dedicated to providing the best care possible to clients and animals.
				</p>
				<h2>Services</h2>
				<p>
					We offer a variety of <router-link to="/services"><b>services</b> </router-link>, including:
				</p>

				<ul>
					<li>Individual therapy sessions</li>
					<li>Group therapy sessions</li>
					<li>Workshops</li>
				</ul>
				<h2>Contact Us</h2>
				<p>
					Interested in learning more about our services? Scheduling a therapy session or a free consultation? We would
					love to hear from you. Please reach us by phone at (902) 229 7897 or by filling out the form below.
					<Contact greeting-message="" class="contactForm" />
				</p>
			</aside>
			<aside class="right">
				<img alt="aat" src="../assets/D724654_edited 812.jpg" title="Yana with Noya and Churchill" class="figure" />
			</aside>
		</section>
		<!-- <section class="buttom">
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
		</section> -->
	</main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
// import userProfile from '@/components/UserProfile.vue';
//import Contact from '@views/Contact.vue';
import Contact from './Contact.vue';
export default {
	name: 'Home',
	components: { Contact }
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

.contactForm {
	display: flex;
	align-items: flex-start;
	gap: 40px;
}
a {
	color: #94821b !important;
}
</style>
