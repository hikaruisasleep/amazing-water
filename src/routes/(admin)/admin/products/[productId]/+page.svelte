<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
	export let form;

	$: ({ product } = data);
	$: edited = form?.edited || false;
	$: if (edited) {
		setTimeout(() => {
			edited = false;
		}, 1500);
	}
</script>

<a href="/admin/products" class="absolute top-3 right-5 bg-[#65adff] p-2 text-white rounded">
	&lt; back to all
</a>

<h1 class="font-extrabold text-3xl text-black">
	Editing <span class="italic">{product.name}</span>
</h1>
<div class="w-4/5 py-24 flex flex-col relative">
	<form action="?/edit" method="post" class="flex flex-col gap-2" use:enhance>
		<div class="flex flex-col">
			<label for="name" class="text-black">Product name</label>
			<input
				type="text"
				name="name"
				id="name"
				bind:value={product.name}
				class="p-2 rounded border"
			/>
		</div>
		<div class="flex flex-col">
			<label for="description" class="text-black">Description</label>
			<textarea
				name="description"
				id="description"
				bind:value={product.description}
				class="p-2 rounded border"
			/>
		</div>
		<div class="flex flex-col">
			<label for="price" class="text-black">Price</label>
			<input
				type="text"
				name="price"
				id="price"
				bind:value={product.price}
				class="p-2 rounded border"
			/>
		</div>
		<button
			type="submit"
			class="bg-[#65adff] max-w-fit p-2 rounded text-white absolute bottom-0 right-0"
		>
			accept changes
		</button>
	</form>
	<form action="?/delete" method="post" use:enhance>
		<button type="submit" class="bg-red-600 p-2 rounded text-white absolute bottom-0 right-36">
			delete
		</button>
	</form>
	<div
		class="opacity-0 bg-white rounded py-2 px-12 border border-green-600 text-black absolute bottom-0 left-0 transition-opacity"
		class:opacity-100={edited}
	>
		<i class="fa-solid fa-circle-check"></i>
		Sucessfully edited!
	</div>
</div>
