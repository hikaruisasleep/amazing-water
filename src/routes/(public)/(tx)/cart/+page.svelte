<script lang="ts">
	import { enhance } from '$app/forms';
	import CartCard from '$lib/components/CartCard.svelte';

	export let data;
	export let form;

	let cart = data.cart;

	let cartItems = cart.productsInCart;

	$: edited = form?.edited || false;
	$: if (edited) {
		setTimeout(() => {
			edited = false;
		}, 1500);
	}
</script>

<div
	class="min-h-[24em] bg-[rgba(255,255,255,0.55)] rounded-lg flex items-center flex-col px-4 sm:px-0 relative"
	class:justify-center={!cartItems.length}
>
	{#if cartItems.length}
		<h1 class="text-black font-bold text-2xl my-8">Your cart</h1>
		<div>
			<div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
				{#each cartItems as item (item.product.id)}
					<CartCard
						title={item.product.name}
						description={item.product.description || ''}
						bind:quantity={item.amount}
					/>
				{/each}
			</div>

			<div class="flex flex-row justify-between sm:justify-end w-full my-8 gap-2">
				<form
					action="?/update"
					method="post"
					class="w-full sm:w-36 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
					use:enhance
				>
					{#each cartItems as item (item.product.id)}
						<input
							type="number"
							name={item.product.id}
							id={item.product.id}
							class="hidden"
							bind:value={item.amount}
						/>
					{/each}
					<button type="submit">
						<div>
							<p class="text-lg font-semibold">Update Cart</p>
						</div>
					</button>
				</form>

				<form
					action="?/checkout"
					method="post"
					class="w-full sm:w-36 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
					use:enhance
				>
					{#each cartItems as item (item.product.id)}
						<input
							type="number"
							name={item.product.id}
							id={item.product.id}
							class="hidden"
							bind:value={item.amount}
						/>
					{/each}
					<button type="submit">
						<div>
							<p class="text-lg font-semibold">Checkout</p>
						</div>
					</button>
				</form>
			</div>
		</div>
	{:else}
		<p class="text-black">there is nothing in your cart!</p>
		<a href="products" class="text-[#65adffd0] hover:text-[#65adff]">go shopping</a>
	{/if}
	<div
		class="opacity-0 bg-white rounded py-2 px-6 border border-green-600 text-black text-xs sm:text-sm absolute bottom-12 transition-opacity"
		class:opacity-70={edited}
	>
		<i class="fa-solid fa-circle-check"></i>
		Cart sucessfully updated!
	</div>
</div>
