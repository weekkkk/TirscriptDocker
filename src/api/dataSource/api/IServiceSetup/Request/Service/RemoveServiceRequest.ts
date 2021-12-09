

export default class RemoveServiceRequest  {
	ServiceId: number = 0;
	constructor(obj?: Partial<RemoveServiceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
