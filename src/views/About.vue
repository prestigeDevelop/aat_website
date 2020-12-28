<template>
	<main class="container">
		<section class="content">
			<h5>About Me</h5>
			<div class="right">
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
			<img alt="aat" src="../assets/20180514_165336_edited.jpg" class="figure" />
			<h4>Certifications:</h4>
			<ul>
				<li>Masters of Education and Leadership, Tel Aviv University</li>
				<li>
					Diploma in Animal Assisted Therapy, Magid school for Animal Assisted Interventions of the Hebrew University
					Jerusalem, recognized by International Association of Human-Animal Interaction Organizations (IAHAIO) and
					International Society for Animal Assisted Therapy (ISAAT)
				</li>
			</ul>
		</section>
		<!-- <div class="some-page-wrapper">
			<div class="row">
				<div class="column">
					<div class="blue-column">
						Some Text in Column One
					</div>
				</div>
				<div class="column">
					<div class="green-column">
						Some Text in Column Two
					</div>
				</div>
			</div>
		</div> -->
	</main>
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
	flex-grow: 1;
}

.container > div {
	border: 1px #42b983 solid;
	flex: 1 1 0%;
}

// .contant {
// 	display: flex;
// 	flex-wrap: nowrap;
// }
.right {
	flex: 1 1 0%;
}

.figure {
	margin: 20px 30px 0 0;
	width: 200px;
	object-fit: contain;
	align-self: flex-start;
}

//
// .some-page-wrapper {
// 	margin: 15px;
// 	background-color: red;
// }

// .row {
// 	display: flex;
// 	flex-direction: row;
// 	flex-wrap: wrap;
// 	width: 100%;
// }

// .column {
// 	display: flex;
// 	flex-direction: column;
// 	flex-basis: 100%;
// }

// .blue-column {
// 	background-color: blue;
// 	height: 100px;
// }

// .green-column {
// 	background-color: green;
// 	height: 100px;
// }
</style>
