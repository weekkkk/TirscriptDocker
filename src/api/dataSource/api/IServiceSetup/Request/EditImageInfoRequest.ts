

export default class EditImageInfoRequest  {
	Id: number = 0;
	Name?: string = '';
	Description?: string = '';
	Version?: string = '';
	Dockerfile?: string = '';
	constructor(obj?: Partial<EditImageInfoRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
