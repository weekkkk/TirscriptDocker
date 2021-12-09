

export default class ProjectResponse  {
	Id: number = 0;
	Name?: string = '';
	Description?: string = '';
	Domain?: string = '';
	constructor(obj?: Partial<ProjectResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
