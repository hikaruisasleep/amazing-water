<script lang="ts">
	export let product;
	export let customer;

	let productsArray = [];

	for (const pd of Object.values(product)) {
		productsArray.push(pd);
	}
</script>

<div
	class="flex flex-row justify-between bg-white rounded-lg p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] w-full"
>
	<div class="flex flex-col">
		<p class="text-black text-xl">{customer}</p>
		{#each productsArray as pd}
			<p>{pd.product.name} x{pd.amount}</p>
		{/each}
	</div>
	<div>
		<p></p>
	</div>
</div>
