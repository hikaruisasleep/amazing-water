<script>
	import { redirect } from '@sveltejs/kit';

	export let data;

	if (!data.auth) {
		redirect(301, '/login');
	}

	let user = data.auth.user;
</script>

<p>{user.first_name} {user.last_name}</p>
