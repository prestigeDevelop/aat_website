<template>
	<main class="container">
		<h1>{{ normalizedSize }}</h1>
		<section class="content">
			<form target="_blank" action="https://formsubmit.co/yanagoldaat@gmail.com" method="POST">
				<div class="form-group">
					<label for="exampleFormControlInput1">Name</label>
					<input id="name" type="name" name="name" class="form-control" placeholder="Name" />
				</div>
				<div class="form-group">
					<label for="exampleFormControlInput1">Email address</label>
					<input
						id="exampleFormControlInput1"
						type="email"
						name="email"
						class="form-control"
						placeholder="name@example.com"
					/>
				</div>

				<div class="form-group">
					<label for="exampleFormControlTextarea1">Message</label>
					<textarea id="exampleFormControlTextarea1" class="form-control" name="message" rows="3"></textarea>
				</div>
				<div class="col-auto">
					<button type="submit" class="btn btn-primary mb-2">Submit</button>
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
</style>
