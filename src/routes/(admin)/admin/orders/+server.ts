import { getAllOrders } from '$lib/server/db/orders';
import { getProductById } from '$lib/server/db/products';
import { getUserById } from '$lib/server/db/users';
import { json } from '@sveltejs/kit';

export async function GET() {
	let ordersDB = await getAllOrders();
	let orders: any[] = [];
	for (const order of ordersDB) {
		let customer = await getUserById(order.customer_id);
		let orderProducts: any[] = [];
		for (const product of Object.values(order.orders)) {
			let key = Object.keys(product)[0];
			let value = Object.values(product)[0];
			let productDB = await getProductById(key);
			let orderItem = { product: productDB, amount: value.amt };
			orderProducts.push(orderItem);
		}
		orders.push({ id: order.id, orders: orderProducts, customer: customer });
	}

	return json({ orders: orders });
}
