class Order {
	id!: number;
	subtotal!: number;
	customerId!: number;
	addressId!: number;
	restaurantId?: number;
	isDelivery!: boolean;
}