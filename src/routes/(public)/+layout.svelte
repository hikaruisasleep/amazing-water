<script lang="ts">
	import '$lib/app.css';
	import Background from '$lib/components/Background.svelte';
	import { clickOutside } from '$lib/modules/clickOutside';

	export let data;
	$: auth = data.auth;

	let showDropdown: boolean;
</script>

<div class="bg-gray-50 text-black/50">
	<Background />
	<div
		class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#65adff] selection:text-white pt-12 lg:pt-10 px-1 lg:px-28"
	>
		<div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
			<header class="grid grid-cols-2 items-center gap-2 py-6">
				<a
					href="/"
					class="flex flex-row justify-start text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff] select-none"
				>
					<span class="fa-solid fa-droplet pr-5 pt-3 pl-1 text-4xl" />
					<h1 class="flex flex-col justify-center">
						<span class="text-md sm:text-3xl font-extrabold"> Amazing Water </span>
						<span class="hidden sm:inline-block text-xs"> she RO on my water till i amazing </span>
					</h1>
				</a>
				<nav class="-mx-3 flex flex-1 justify-end relative">
					{#if auth}
						<a href="/cart">
							<span class="fa-solid fa-cart-shopping pb-2 text-2xl text-black py-3 px-2"></span>
						</a>
						<button
							type="button"
							class="flex flex-row rounded-md px-3 py-2 text-black ring-1 ring-transparent transition duration-500 hover:opacity-70 focus-visible:ring-[#65adff]"
							on:click={() => (showDropdown = true)}
						>
							<!-- <p class="leading-7 pr-2 select-none">
								{auth.user.first_name}
							</p> -->
							<div class="size-8 bg-gray-700 rounded-full relative overflow-clip">
								<div
									class="size-3 rounded-full bg-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/3"
								></div>
								<div
									class="size-6 rounded-full bg-white absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-full"
								></div>
							</div>
						</button>

						<div
							class="bg-white shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] p-4 rounded-lg absolute top-12 right-3 flex flex-col gap-4 transition-all duration-700"
							class:hidden={!showDropdown}
							class:opacity-0={!showDropdown}
							class:opacity-100={showDropdown}
							use:clickOutside
							on:click_outside={() => (showDropdown ? (showDropdown = false) : showDropdown)}
						>
							<a
								href="/profile"
								class="hover:text-black transition-all"
								on:click={() => (showDropdown = false)}>Profile</a
							>
							<form action="/logout" method="post">
								<button type="submit" class="text-red-700"> Log Out </button>
							</form>
						</div>
					{:else}
						<a
							href="login"
							class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff]"
						>
							Log in
						</a>
						<a
							href="register"
							class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff]"
						>
							Register
						</a>
					{/if}
				</nav>
			</header>
			<main class="mt-6">
				<slot />
			</main>
		</div>
		<footer class="pt-8 pb-12 mt-4 text-center text-sm text-black select-none bottom-0">
			<a href="creators">
				<span class="fa-solid fa-copyright" /> PARANTHESES 2024
			</a>
			<br />
			<p
				class="text-gray-600 opacity-65 max-w-[85ch] mt-1 px-4"
				style="font-size: 0.5rem; line-height: 0.75rem;"
			>
				This is our final project for Website Design course in the 2<sup>nd</sup> semester in Universitas
				Internasional Batam with Mr. Fredian Simanjuntak, S. Kom., M. Kom. as Lecturers.
			</p>
		</footer>
	</div>
</div>
