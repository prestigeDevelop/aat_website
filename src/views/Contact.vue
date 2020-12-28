<template>
	<main class="container">
		<h5>Lets Talk..</h5>
		<section class="content">
			<form>
				<div class="form-group">
					<label for="exampleFormControlInput1">Name</label>
					<input type="name" class="form-control" id="name" placeholder="Name" />
				</div>
				<div class="form-group">
					<label for="exampleFormControlInput1">Email address</label>
					<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
				</div>

				<div class="form-group">
					<label for="exampleFormControlTextarea1">Message</label>
					<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
	components: {}
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
