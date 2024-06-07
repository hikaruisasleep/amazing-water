<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let form;

	$: if (form?.success) {
		goto(`/admin/products/${form.productId}`);
	}
</script>

<h1 class="font-extrabold text-3xl text-black">Add a new product</h1>
<div class="w-4/5">
	<form action="?/addNewProduct" method="post" class="w-full flex flex-col mt-8 gap-1" use:enhance>
		<div class="flex justify-between gap-8">
			<label for="name" class="text-black">Product name</label>
			<input
				type="text"
				name="name"
				id="name"
				class="border border-black rounded-md w-1/2 lg:w-3/4 px-2"
				required
			/>
		</div>
		<div class="flex justify-between gap-6">
			<label for="description" class="text-black">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				class="border border-black rounded-md w-1/2 lg:w-3/4 px-2"
			/>
		</div>
		<div class="flex justify-between gap-6">
			<label for="price" class="text-black">Price</label>
			<input
				type="number"
				name="price"
				id="price"
				class="border border-black rounded-md w-1/2 lg:w-3/4 px-2"
				required
			/>
		</div>
		<div class="self-end">
			<button type="submit" class="text-white bg-slate-400 rounded-md py-1 px-5 mt-8">
				Submit
			</button>
		</div>
	</form>
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
