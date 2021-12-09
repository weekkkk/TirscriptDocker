

export default class GetRegistryRequest  {
	MainProjectId: number = 0;
	constructor(obj?: Partial<GetRegistryRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
