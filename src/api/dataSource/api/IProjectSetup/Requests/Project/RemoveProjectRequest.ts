

export default class RemoveProjectRequest  {
	MainProjectId: number = 0;
	constructor(obj?: Partial<RemoveProjectRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
