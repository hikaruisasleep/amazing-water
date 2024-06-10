<script lang="ts">
	import AdminOrderCard from '$lib/components/AdminOrderCard.svelte';
	import { onMount } from 'svelte';
	import _ from 'lodash-es';

	$: orders = [];

	const fetchOrder = async () => {
		try {
			const res = await fetch('/admin/orders');

			if (res.ok) {
				let newArr = await res.json();
				if (_.isEqual(newArr.orders, orders)) {
					console.log('same');
				} else {
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
				/>
			{/each}
		</div>
	</div>
</div>
