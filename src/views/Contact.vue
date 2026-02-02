<template>
	<main class="container">
		<h1>{{ normalizedSize }}</h1>
		<section class="content">
			<b-form action="https://formsubmit.co/yanagoldaat@gmail.com" method="POST" @submit.prevent="onSubmit">
				<BRow>
					<BCol md="6">
						<b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
							<b-form-input
								id="input-1"
								v-model="form.name"
								name="name"
								type="text"
								placeholder="Enter name"
								required
								class="rounded-input"
							></b-form-input>
						</b-form-group>
					</BCol>
					<BCol md="6">
						<b-form-group id="input-group-2" label="Email address:" label-for="input-2">
							<b-form-input
								id="input-2"
								v-model="form.email"
								name="email"
								type="email"
								placeholder="Enter email"
								required
								class="rounded-input"
							></b-form-input>
						</b-form-group>
					</BCol>
				</BRow>

				<b-form-group id="input-group-3" label="Message:" label-for="textarea">
					<b-form-textarea
						id="textarea"
						v-model="form.message"
						name="message"
						placeholder="Enter message..."
						rows="3"
						max-rows="6"
						class="rounded-input"
					></b-form-textarea>
				</b-form-group>

				<b-button type="submit" variant="secondary">Submit</b-button>
			</b-form>
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

	computed: {
		// computed property that auto-updates when the prop changes
		normalizedSize() {
			return this.greetingMessage;
		}
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
.form-group {
	margin-bottom: 1rem;
}
</style>
