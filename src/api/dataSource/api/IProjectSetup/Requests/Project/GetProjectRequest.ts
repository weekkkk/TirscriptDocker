

export default class GetProjectRequest  {
	MainProjectId: number = 0;
	constructor(obj?: Partial<GetProjectRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
