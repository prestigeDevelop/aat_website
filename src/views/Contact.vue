<template>
	<main class="container">
		<h1>{{ greetingMessage }}</h1>
		<section class="content">
			<form action="https://formsubmit.co/yanagoldaat@gmail.com" method="POST" @submit.prevent="onSubmit">
				<div class="row">
					<div class="col-md-6">
						<div class="mb-3">
							<label for="input-1" class="form-label">Your Name:</label>
							<input
								id="input-1"
								v-model="form.name"
								name="name"
								type="text"
								placeholder="Enter name"
								required
								class="form-control rounded-input"
							/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="mb-3">
							<label for="input-2" class="form-label">Email address:</label>
							<input
								id="input-2"
								v-model="form.email"
								name="email"
								type="email"
								placeholder="Enter email"
								required
								class="form-control rounded-input"
							/>
						</div>
					</div>
				</div>

				<div class="mb-3">
					<label for="textarea" class="form-label">Message:</label>
					<textarea
						id="textarea"
						v-model="form.message"
						name="message"
						placeholder="Enter message..."
						rows="3"
						class="form-control rounded-input"
					></textarea>
				</div>

				<button type="submit" class="btn btn-secondary">Submit</button>
			</form>
		</section>
	</main>
</template>

<script>
export default {
	name: 'Contact',
	props: { greetingMessage: { type: String, required: false, default: 'Lets Talk..' } },
	data() {
		return {
			form: {
				email: '',
				name: '',
				message: ''
			}
		};
	},

	methods: {
		onSubmit(event) {
			// For now, we'll let the form submit traditionally to formsubmit.co
			// In the future, you could use a library like axios to submit this
			// without a page reload for a better user experience.
			event.target.submit();
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
.mb-3 {
	margin-bottom: 1rem;
}
</style>
