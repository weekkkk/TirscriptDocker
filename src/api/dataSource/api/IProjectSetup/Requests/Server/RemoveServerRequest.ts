

export default class RemoveServerRequest  {
	ServerId: number = 0;
	constructor(obj?: Partial<RemoveServerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
