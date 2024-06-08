<script lang="ts">
	export let product;
	export let customer;
</script>

<div
	class="flex flex-row justify-between bg-white rounded-lg p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] w-full"
>
	<div class="flex flex-col">
		<p class="text-black text-xl">{customer.name}</p>
		<p>{product.name}</p>
	</div>
</div>
