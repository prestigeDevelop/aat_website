<template>
	<div class="user-profile">
		<div class="user-profile__user-panel">
			<h1 class="user-profile__username">@{{ user.username }}</h1>
			<div class="user-profile__admin-badge" v-if="this.user.isAdmin">
				Admin
			</div>
			<div class="user-profile__follower-count"><strong>Followers: </strong> {{ follwers }}</div>
			<form @submit.prevent="craeteNewTwoot" class="user-profile__create-twoot">
				<label for="newToot">New Twoot ({{ newTwootCharacterCount }}/50)</label>
				<textarea
					id="newTwoot"
					rows="4"
					v-model="newTwootContent"
					:class="{ exeeded: newTwootCharacterCount > 50 }"
				></textarea>
				<div class="user-profile__create-twoot-type">
					<label for="newTwootType">Type</label>
					<select id="newTwootType" v-model="contentType">
						<option :value="option.value" v-for="(option, index) in newTwootTypes" :key="index">
							{{ option.name }}
						</option>
					</select>
				</div>
				<button :disabled="isDisabled">Twoot!</button>
			</form>
		</div>
		<div class="user-profile__twoots-wrapper">
			<twootItem
				v-for="twit in user.twits"
				:key="twit.id"
				:username="user.username"
				:twoot="twit"
				:followers="follwers"
				@favourite="toggelMakeFavourite"
			/>
		</div>

		<div class="user-profile__buttons">
			<button @click="followUser">push</button>
			<button @click="resetFollowers">reset</button>
		</div>

		<div class="user-profile__buttons">
			<button @click="followUser">push</button>
			<button @click="resetFollowers">reset</button>
		</div>
	</div>
</template>

<script>
import twootItem from './TwootItem';

export default {
	name: 'App',
	components: { twootItem },
	data() {
		return {
			follwers: 0,
			newTwootContent: '',
			isDisabled: false,
			contentType: 'instant',
			newTwootTypes: [
				{ value: 'draft', name: 'Draft' },
				{ value: 'instant', name: 'Instant Twoot' }
			],
			user: {
				id: 1,
				username: 'golda6',
				firstname: 'avi',
				lastname: 'gold',
				email: 'avishaygold@gmail.com',
				isAdmin: true,
				twits: [
					{ id: 1, content: 'Twitter is amazing' },
					{ id: 2, content: 'Facebook is amazing' }
				]
			},
			options: [
				{
					value: 'billingCountry',
					label: 'Billing Country'
				},
				{
					value: 'billingState',
					label: 'Billing State'
				},
				{
					value: 'billingCity',
					label: 'Billing City'
				},
				{
					value: 'billingZIP',
					label: 'Billing ZIP'
				},
				{
					value: 'shippingCountry',
					label: 'Shipping Country'
				}
			],
			value: ''
		};
	},
	computed: {
		fullName() {
			return `${this.user.firstname} ${this.user.lastname}`;
		},
		newTwootCharacterCount() {
			return this.newTwootContent.length;
		}
	},
	watch: {
		follwers(newnumber, old) {
			if (newnumber > old) {
				console.log(`${this.user.firstname} ${this.user.lastname} has follower joined`);
			}
		},
		newTwootCharacterCount() {
			if (this.newTwootContent.length > 50) {
				this.isDisabled = true;
			} else {
				this.isDisabled = false;
			}
		}
	},
	mounted() {
		this.followUser();
	},
	methods: {
		followUser() {
			this.follwers++;
		},
		resetFollowers() {
			this.follwers = 0;
		},
		toggelMakeFavourite(id) {
			console.log(`Favourite Id #${id}`);
		},
		craeteNewTwoot() {
			if (this.newTwootContent && this.contentType !== 'draft') {
				this.user.twits.unshift({
					id: this.user.twits.length + 1,
					content: this.newTwootContent
				});
				this.newTwootContent = '';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.user-profile {
	display: grid;
	// flex-wrap: wrap;
	grid-template-columns: 1fr 3fr;
	grid-gap: 10px;
	padding: 50px 5%;

	.user-profile__user-panel {
		display: flex;
		flex-direction: column;
		padding: 20px;
		background-color: white;
		border-radius: 5px;
		border: 1px solid #dfe3e8;
		margin-bottom: auto;
		.user-profile__admin-badge {
			background: rebeccapurple;
			color: white;
			border-radius: 5px;
			margin-right: auto;
			padding: 0 10px;
			font-weight: bold;
		}
	}
}
h1 {
	margin: 0;
}

.user-profile__twoots-wrapper {
	display: grid;
	grid-gap: 10px;
	margin-bottom: auto;
}

.user-profile__create-twoot {
	padding-top: 20px;
	display: flex;
	flex-direction: column;
}
.user-profile__buttons {
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: rgb(187, 55, 55);
	border-radius: 5px;
	border: 1px solid #dfe3e8;
	margin-bottom: auto;
	// float: left;
	// display: block;
}

.exeeded {
	color: red;
}
</style>
