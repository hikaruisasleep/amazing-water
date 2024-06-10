<script lang="ts">
	export let title: string;
	export let description: string;

	export let quantity: number = 0;
</script>

<div
	class="flex flex-row justify-between bg-white rounded-lg p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)]"
>
	<div class="flex flex-col">
		<p class="text-black text-xl">{title}</p>
		<p class="text-sm pt-4">{description}</p>
	</div>

	<div class="flex flex-col justify-center items-center ml-2">
		<div
			class="flex flex-row justify-center items-center h-min w-max rounded-lg border border-gray-800 overflow-clip"
		>
			<button
				class="bg-gray-200 w-6"
				on:click={() => {
					quantity > 0 ? (quantity -= 1) : (quantity = 0);
				}}
			>
				-
			</button>
			<input
				type="number"
				bind:value={quantity}
				class="w-8 p-0 text-center bg-white border border-gray-800 border-y-0"
			/>
			<button
				class="bg-gray-200 w-6"
				on:click={() => {
					quantity += 1;
				}}
			>
				+
			</button>
		</div>
		<p class="text-xs mt-1">gallons</p>
	</div>
</div>

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		appearance: textfield;
		-moz-appearance: textfield;
	}
</style>
