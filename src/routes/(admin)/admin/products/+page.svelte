<script>
	export let data;
	import AdminItemCard from '$lib/components/AdminItemCard.svelte';
</script>

<a href="/admin/products/add" class="absolute top-3 right-5 bg-[#65adff] rounded p-2 text-white">
	<i class="fa-solid fa-add"></i> add new item</a
>

<div class="flex flex-col w-full p-4 gap-4">
	{#each data.products as product}
		<AdminItemCard {product} />
	{/each}
</div>
