<template>
	<main class="container">
		<div class="card-deck">
			<BRow>
				<BCol lg="4" md="auto">
					<div class="card">
						<img class="card-img-top" src="../assets/noya_article_1.jpg" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">
								Human-Animal Interactions: Introduction to Animal Assisted Therapy
							</h5>
							<p class="card-text">
								The relationship between people and animals has been long-standing and has played a
								significant role in human history. From working animals to companion animals, animals
								have been an integral part of human life and have had a profound impact on our
								emotional.
							</p>
							<p></p>
							<router-link to="/humanAnimalInteractions"><b>read more...</b> </router-link>
							<p class="card-text"><small class="text-muted">Yana Gold, February 15, 2022</small></p>
						</div>
					</div>
				</BCol>
			</BRow>
			<!-- <div class="card">
				<img class="card-img-top" src="../assets/noya.png" alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						The relationship between people and animals has been long-standing and has played a significant role
						in human history. From working animals to companion animals, animals have been an integral part of
						human life and have had a profound impact on our emotional...read more
					</p>
					<p class="card-text"><small class="text-muted">Yana Gold, February 15, 2022</small></p>
				</div>
			</div>
			<div class="card">
				<img class="card-img-top" src="../assets/noya.png" alt="Card image cap" />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a wider card with supporting text below as a natural lead-in to additional content. This card
						has even longer content than the first to show that equal height action.
					</p>
					<p class="card-text"><small class="text-muted">Yana Gold, February 15, 2022</small></p>
				</div>
			</div> -->
		</div>
	</main>
</template>

<style lang="scss" scoped>
/* Card Based Layout - Base styles */
.right img {
	width: 20%;
	object-fit: contain;
	border-radius: 4px;
}
</style>
