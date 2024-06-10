<script>
	import { redirect } from '@sveltejs/kit';

	export let data;

	if (!data.auth) {
		redirect(301, '/login');
	}

	let user = data.auth.user;
</script>

<div class="bg-white rounded p-4">
	<h1 class="text-black font-semibold">{user.first_name} {user.last_name}</h1>
	<p>member since {user.createdAt.toLocaleDateString()}</p>
</div>
