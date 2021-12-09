

export default class EditProjectRequest  {
	IdMainProject: number = 0;
	Name?: string = '';
	Domain?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<EditProjectRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
