<template>
	<div id="app">
		<router-view />
		<van-tabbar v-model="active">
			<van-tabbar-item replace to="/home" icon="home-o">大厅</van-tabbar-item>
			<van-tabbar-item replace to="/equipment" icon="friends-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 'home',
			};
		},
	};
</script>

<style scoped>
</style>
