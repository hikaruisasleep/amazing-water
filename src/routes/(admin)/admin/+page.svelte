<script lang="ts">
	import AdminOrderCard from '$lib/components/AdminOrderCard.svelte';
</script>

<div class="flex flex-col gap-8">
	<div class="text-white flex justify-center gap-6">
		<a href="/admin/products" class="bg-gray-700 p-3 rounded">Manage products</a>
		<a href="/admin/orders" class="bg-gray-700 p-3 rounded">Manage orders</a>
	</div>

	<div class="bg-[#ffffff80] rounded min-h-60 flex flex-col items-center">
		<h1 class="font-bold text-lg text-black my-2">Active orders</h1>
		<div class="flex flex-col w-full p-4">
			<AdminOrderCard customer={{ name: 'human' }} product={{ name: 'fdkjdk' }} />
		</div>
	</div>
</div>
