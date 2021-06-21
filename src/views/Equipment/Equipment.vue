<template>
	<div>
		<van-form @submit="onSubmit">
			<van-field v-model="state.orderNumber" name="序号" label="序号" placeholder="序号" />
			<van-field v-model="state.equipmentName" name="名称" label="名称" placeholder="名称" />

			<van-field v-model="state.equipmentType" readonly clickable name="picker" label="类型" placeholder="类型"
				@click="state.showPicker = true" />
			<van-popup v-model:show="state.showPicker" position="bottom">
				<van-picker :columns="columns" @confirm="onConfirm" @cancel="state.showPicker = false" />
			</van-popup>

			<van-field v-model="state.number" type="number" label="数字" />
			<van-field v-model="state.number" type="number" label="数字" />
			<van-field v-model="state.number" type="number" label="数字" />
			<van-field v-model="state.number" type="number" label="数字" />
			<van-field v-model="state.number" type="number" label="数字" />

			<van-field v-model="state.message" rows="2" autosize label="备注" type="textarea" maxlength="50"
				placeholder="备注" show-word-limit />
			<div style="margin: 16px;">
				<van-button round block type="info" v-on:click="onSubmit">提交</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	import {
		reactive
	} from 'vue';
import {testPost} from '@/http/api/api1'

	export default {
		setup() {
			const state = reactive({
				orderNumber: '',
				equipmentName: '',
				equipmentType: '',
				showPicker: false,
				number: '',
				message: ''
			});

			const columns = ['上装', '下装', '手部', '脚部', '头部'];

			const onConfirm = (value) => {
				state.equipmentType = value;
				state.showPicker = false;
			};

			return {
				state,
				columns,
				onConfirm,
			};
		},
		methods: {
			onSubmit() {
				console.log(this.state.orderNumber)
                testPost(this.state).then(res=> {
                    console.log(res)
				}).catch(err=> {
				    console.log(err)
				})
			}
		}
	};
</script>

<style scoped>

</style>
