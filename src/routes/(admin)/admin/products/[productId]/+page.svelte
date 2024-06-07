<script lang="ts">
	export let data;

	$: ({ product } = data);
</script>

<a href="/admin/products" class="absolute top-3 right-5">&lt; back to all</a>

<h1 class="font-extrabold text-3xl text-black">{product.name}</h1>
<div class="w-4/5">
	<p>{product.description}</p>
	<p>{product.price}</p>
</div>

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
