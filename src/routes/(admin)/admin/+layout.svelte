<script>
	import '$lib/app.css';
	import Background from '$lib/components/Background.svelte';
</script>

<div class="bg-gray-50 text-black/50">
	<Background />
	<div
		class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#65adff] selection:text-white pt-12 lg:pt-0 px-1 lg:px-28"
	>
		<div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
			<header class="grid grid-cols-2 items-center gap-2 py-6">
				<a
					href="/admin"
					class="flex flex-row justify-start text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#65adff] select-none"
				>
					<span class="fa-solid fa-droplet pr-5 pt-3 pl-1 text-4xl" />
					<h1 class="flex flex-col justify-center">
						<span class="text-md sm:text-3xl font-extrabold"> Amazing Water </span>
						<span class="inline-block text-xs"> Admin Panel </span>
					</h1>
				</a>
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
				class="text-gray-600 opacity-65 max-w-[85ch] mt-1"
				style="font-size: 0.6rem; line-height: 1rem;"
			>
				This is our final project for Website Design course in the 2<sup>nd</sup> semester in Universitas
				Internasional Batam with Mr. Fredian Simanjuntak, S. Kom., M. Kom. as Lecturers.
			</p>
		</footer>
	</div>
</div>
