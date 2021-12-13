class Delivery {
	id?: number;
	customerId!: number;
	addressId!: number;
	platformId?: number;
	status: 'processing' | 'pending' | 'transit' | 'complete' = 'processing'; //processing, pending pickup, in transit, completed
	orderId!: number;

	//create without id for dto's
	constructor(customerId: number, addressId: number,  orderId: number, platformId?: number, id?: number) {
		this.customerId = customerId;
		this.addressId = addressId;
		console.log(orderId)
		this.orderId = orderId
		this.platformId = platformId;
		if(id) this.id = id;
		else this.id = Math.floor(Math.random() * 1000)
		console.log(`new delivery: ${this.id}`)
	}
}

export { Delivery };