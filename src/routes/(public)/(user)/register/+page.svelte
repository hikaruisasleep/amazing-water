<script lang="ts">
	export let form;
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	$: authenticationError = form?.error === 'authentication';

	$: if (form?.success) {
		goto('/');
	}
</script>

<div class="bg-[#ffffff80] rounded-xl p-4">
	<h1 class="text-black font-bold text-2xl mb-8">Register a new account</h1>
	<form action="?/register" method="post" class="grid grid-cols-2 grid-rows-4 gap-2" use:enhance>
		<div class="flex flex-col col-span-2 row-span-1">
			<label for="username" class="text-black">Username</label>
			<input id="text" type="text" required name="username" autocomplete="username" class="px-1" />
		</div>

		<div class="flex flex-col col-span-1 row-span-1">
			<label for="firstname" class="text-black">First Name</label>
			<input id="text" type="text" required name="firstname" class="px-1" />
		</div>
		<div class="flex flex-col col-span-1 row-span-1">
			<label for="lastname" class="text-black">Last Name</label>
			<input id="text" type="text" required name="lastname" class="px-1" />
		</div>
		<div class="flex flex-col col-span-2 row-span-1">
			<label for="password" class="text-black">Password</label>
			<input
				id="password"
				aria-invalid={authenticationError}
				aria-describedby={authenticationError ? 'authentication-error' : undefined}
				type="password"
				required
				name="password"
				autocomplete="current-password"
				class="px-1"
			/>
		</div>
		<div class="flex col-span-2 row-span-1 justify-end">
			<button type="submit" class="w-fit h-fit px-4 py-2 rounded-md bg-[#65adff]">Login</button>
		</div>
	</form>
	<p class="login">Already have an account? <a href="/login" class="text-[#65adff]">Log in</a>.</p>
</div>
