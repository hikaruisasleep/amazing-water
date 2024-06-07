<script lang="ts">
	import CatalogCard from '$lib/components/CatalogCard.svelte';
	let auth = {
		user: true
	};
</script>

<div class={'flex flex-col justify-between ' + (auth.user ? 'items-end' : 'items-center')}>
	<div class="grid gap-4 grid-cols-1 lg:grid-cols-2">
		<CatalogCard {auth} title="water" description="normal water" />

		<CatalogCard
			{auth}
			title="rare water"
			description="from the springs of maro'ah deep in the himalayan mountains collected from the blood of a thousand sacrifices from a sacred ritual"
		/>
	</div>
	{#if auth.user}
		<div class="grid gap-2 grid-cols-2 mt-8">
			<a
				href="cart"
				class="w-36 bg-gray-300 rounded-md transition duration-300 flex justify-center text-black/50 hover:text-black/60 select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
			>
				<div class="px-3 py-2">
					<p class="text-lg font-semibold">View Cart</p>
				</div>
			</a>
			<a
				href="#"
				class="w-36 bg-[#65adff] rounded-md transition duration-300 flex justify-center text-white/80 hover:text-white select-none ring-1 ring-white/[0.05] hover:ring-black/30 focus:outline-none focus-visible:ring-[#65adff]"
			>
				<div class="px-3 py-2">
					<p class="text-lg font-semibold">Order Now</p>
				</div>
			</a>
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
</div>
