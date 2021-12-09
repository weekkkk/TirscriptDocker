

export default class StartAllContainersManuallyRequest  {
	ServerId: number = 0;
	constructor(obj?: Partial<StartAllContainersManuallyRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
