<template>
	<main class="container">
		<h1>{{ normalizedSize }}</h1>
		<section class="content">
			<form target="_blank" action="https://formsubmit.co/yanagoldaat@gmail.com" method="POST">
				<div class="form-group">
					<label for="exampleFormControlInput1">Name</label>
					<input id="name" type="name" name="name" class="form-control rounded-input" placeholder="Name" />
				</div>
				<div class="form-group">
					<label for="exampleFormControlInput1">Email address</label>
					<input
						id="exampleFormControlInput1"
						type="email"
						name="email"
						class="form-control rounded-input"
						placeholder="name@example.com"
					/>
				</div>

				<div class="form-group">
					<label for="exampleFormControlTextarea1">Message</label>
					<textarea
						id="exampleFormControlTextarea1"
						class="form-control rounded-input"
						name="message"
						rows="3"
					></textarea>
				</div>
				<div class="">
					<button type="submit" class="btn btn-secondary mb-2">Submit</button>
				</div>
			</form>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Contact',
	components: {},
	props: { greetingMessage: { type: String, required: false, default: 'Lets Talk..' } },
	computed: {
		// computed property that auto-updates when the prop changes
		normalizedSize() {
			return this.greetingMessage;
		}
	}
};
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	//default properties
	justify-content: flex-start;
	align-items: center;
}
input {
	padding: 10px;
	border: 0;
	box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
}
.rounded-input {
	padding: 10px;
	border-radius: 10px;
}
input,
textarea,
select {
	background-color: rgb(219, 224, 230);
	color: #000;
}
</style>
