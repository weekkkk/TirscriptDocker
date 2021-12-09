

export default class RemoveReleaseServerRequest  {
	ReleaseServerId: number = 0;
	constructor(obj?: Partial<RemoveReleaseServerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
