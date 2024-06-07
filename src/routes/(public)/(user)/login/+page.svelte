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
	<h1 class="text-black font-bold text-2xl mb-8">Log in to your account</h1>
	<form action="?/login" method="post" class="flex flex-col gap-2" use:enhance>
		<div class="flex flex-col">
			<label for="username" class="text-black">Username</label>
			<input
				id="text"
				aria-invalid={authenticationError}
				aria-describedby={authenticationError ? 'authentication-error' : undefined}
				type="text"
				required
				name="username"
				autocomplete="username"
			/>
		</div>
		<div class="flex flex-col">
			<label for="password" class="text-black">Password</label>
			<input
				id="password"
				aria-invalid={authenticationError}
				aria-describedby={authenticationError ? 'authentication-error' : undefined}
				type="password"
				required
				name="password"
				autocomplete="current-password"
			/>
		</div>
		{#if authenticationError}
			<small id="authentication-error" class="text-xs">
				Check email and password are correct.
			</small>
		{/if}
		<div class="flex col-span-2 row-span-1 justify-end">
			<button type="submit" class="w-fit h-fit px-4 py-2 rounded-md bg-[#65adff]">Login</button>
		</div>
	</form>
	<p class="signup">No account yet? <a href="/register" class="text-[#65adff]">Sign up</a>.</p>
</div>
