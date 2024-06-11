<script lang="ts">
	import AdminOrderCard from '$lib/components/AdminOrderCard.svelte';
	import { onMount } from 'svelte';
	import _ from 'lodash-es';
	import { goto } from '$app/navigation';

	export let form;

	$: orders = [];

	const fetchOrder = async () => {
		try {
			const res = await fetch('/admin/orders');

			if (res.ok) {
				let newArr = await res.json();
				if (_.isEqual(newArr.orders, orders)) {
					console.log('same');
				} else {
					for (const order of newArr.orders) {
						for (const item of order.orders) {
							if (!item.amount) {
								let itemIndex = order.orders.indexOf(item);
								order.orders.splice(itemIndex, 1);
							}
						}
					}
					orders = newArr.orders;
				}
			} else {
				console.error('fetch error');
			}
		} catch (e) {
			console.error('fetch error', e);
		}
	};

	onMount(fetchOrder);

	let interval = 1000;
	const poll = () => {
		console.log('poll');
		setInterval(fetchOrder, interval);
	};
	onMount(poll);

	$: deleted = form?.deleted || false;
	$: if (deleted) {
		setTimeout(() => {
			deleted = false;
		}, 1500);
	}
</script>

<div class="flex flex-col gap-8">
	<div class="text-white flex justify-center gap-6">
		<a href="/admin/products" class="bg-gray-700 p-3 rounded">Manage products</a>
	</div>

	<div class="bg-[#ffffff80] rounded min-h-60 flex flex-col items-center">
		<h1 class="font-bold text-lg text-black my-2">Active orders</h1>
		<div class="flex flex-col w-full p-4 gap-4">
			{#each orders as order}
				<AdminOrderCard
					customer={order.customer.first_name + ' ' + order.customer.last_name}
					product={order.orders}
					orderId={order.id}
				/>
			{/each}
		</div>
	</div>

	<div
		class="opacity-0 bg-white rounded py-2 px-6 border border-green-600 text-black absolute top-8 right-8 transition-opacity"
		class:opacity-100={deleted}
	>
		<i class="fa-solid fa-circle-check"></i>
		Order cleared!
	</div>
</div>
