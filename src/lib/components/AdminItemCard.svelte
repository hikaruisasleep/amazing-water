<script lang="ts">
	export let product;
</script>

<div
	class="flex flex-row justify-between bg-white rounded-lg p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)]"
>
	<div class="flex flex-col">
		<p class="text-black text-xl">{product.name}</p>
		<p class="text-sm pt-4">{product.description}</p>
		<p class="text-sm pt-4">{product.price}</p>
	</div>
	<div class="flex flex-col justify-center items-center ml-2">
		<div
			class="flex flex-row justify-center items-center h-min w-max rounded-lg border border-gray-800 overflow-clip"
		>
			<a href="admin/products/{product.id}/edit" class="bg-gray-200 px-2">edit</a>
		</div>
	</div>
</div>
