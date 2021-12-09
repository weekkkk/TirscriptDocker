

export default class RemoveRegistryRequest  {
	RegistryId: number = 0;
	constructor(obj?: Partial<RemoveRegistryRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
