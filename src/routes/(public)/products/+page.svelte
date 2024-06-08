<script lang="ts">
	import CatalogCard from '$lib/components/CatalogCard.svelte';

	export let data;
	let auth = data.auth ? data.auth : false;
	let productAmounts: { [id: string]: { amt: number } } = {};

	for (const product of data.products) {
		let id = product.id;
		productAmounts = Object.assign({ [id]: { amt: 0 } });
	}

	export let form;
</script>

<div class={'flex flex-col justify-between' + (auth ? 'items-end' : 'items-center')}>
	<div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
		{#each data.products as product (product.id)}
			<div class="col-span-full">
				<CatalogCard
					{auth}
					title={product.name}
					description={product.description ? product.description : ''}
					bind:quantity={productAmounts[product.id].amt}
				/>
			</div>
		{/each}
	</div>
	{#if auth}
		<div class="grid grid-cols-2 mt-8">
			<div class="col-span-2 sm:col-span-1 sm:col-start-2 flex flex-row justify-end gap-4">
				<a
					href="cart"
					class="w-full sm:w-36 bg-gray-300 rounded-md transition duration-300 flex justify-center text-black/50 hover:text-black/60 select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
				>
					<div class="px-3 py-2">
						<p class="text-lg font-semibold">View Cart</p>
					</div>
				</a>
				<form
					action="?/cart"
					method="post"
					class="w-full sm:w-36 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
				>
					{#each data.products as product (product.id)}
						<input
							type="number"
							name={product.id}
							id={product.id}
							class="hidden"
							bind:value={productAmounts[product.id].amt}
						/>
					{/each}
					<button type="submit">
						<div>
							<p class="text-lg font-semibold">Add to Cart</p>
						</div>
					</button>
				</form>
			</div>
		</div>
	{:else}
		<a
			href="login"
			class="w-full mt-8 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
		>
			<div class="px-3 py-2">
				<p class="text-lg font-semibold">Log in to place order</p>
			</div>
		</a>
	{/if}
	{form?.items}
</div>
