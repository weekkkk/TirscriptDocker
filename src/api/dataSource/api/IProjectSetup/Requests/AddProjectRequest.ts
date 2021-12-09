

export default class AddProjectRequest  {
	IdMainProject: number = 0;
	Name?: string = '';
	Domain?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<AddProjectRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
