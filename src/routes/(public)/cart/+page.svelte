<script lang="ts">
	let items: any[] = [];
</script>

<div
	class="min-h-[36em] bg-[rgba(255,255,255,0.55)] rounded-lg flex items-center justify-center flex-col"
>
	{#if items.length}
		{#each items as item}
			<div>{item}</div>
		{/each}
	{:else}
		<p class="text-black">there is nothing in your cart!</p>
		<a href="products" class="text-[#65adffd0] hover:text-[#65adff]">go shopping</a>
	{/if}
</div>
