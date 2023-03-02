<template>
	<main class="container">
		<div class="card-deck">
			<BRow>
				<BCol lg="4" md="auto">
					<div class="card">
						<img class="card-img-top imgHeight" src="../assets/noya_article_1.jpg" alt="Card image cap" />
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
							<p class="card-text"><small class="text-muted">Yana Gold, February 15, 2023</small></p>
						</div>
					</div>
				</BCol>
				<BCol lg="4" md="auto">
					<div class="card">
						<img class="card-img-top imgHeight" src="../assets/photo Blog post 2.jpg" alt="Card image cap" />
						<div class="card-body">
							<h5 class="card-title">
								Understanding Anxiety Disorders in Children and Youth: Positive Effects of
								Animal-Assisted Therapy.
							</h5>
							<p class="card-text">
								Animal-assisted therapy (AAT) is a comfortable approach that involves human-animal
								interaction in a therapeutic setting. It has been shown to be effective in supporting
								people with a variety of health conditions and challenges, including anxiety
								disorders.
							</p>
							<p></p>
							<router-link to="/understandingAnxietyDisorders"><b>read more...</b> </router-link>
							<p class="card-text"><small class="text-muted">Yana Gold, March 1, 2023</small></p>
						</div>
					</div>
				</BCol>
			</BRow>
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
.imgHeight {
	max-height: 350.66px;
}
</style>
