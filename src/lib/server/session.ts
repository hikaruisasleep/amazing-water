import { Temporal } from '@js-temporal/polyfill';
import type { Cookies } from '@sveltejs/kit';

export function createSession(cookies: Cookies) {
	const sessionID = crypto.randomUUID();
	cookies.set('session', JSON.stringify({ sessionID }), {
		path: '/',
		expires: new Date(Temporal.Now.plainDateTimeISO().add({ hours: 2 }).toString()),
		sameSite: 'lax',
		httpOnly: true
	});
}

export function setSessionUser({
	cookies,
	uid,
	sessionID
}: {
	cookies: Cookies;
	uid: string;
	sessionID: string;
}) {
	cookies.set('session', JSON.stringify({ uid, sessionID }), {
		path: '/',
		expires: new Date(Temporal.Now.plainDateTimeISO().add({ hours: 2 }).toString()),
		sameSite: 'lax',
		httpOnly: true
	});
}
