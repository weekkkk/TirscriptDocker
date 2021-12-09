

export default class AddServiceRequest  {
	IdMainProject: number = 0;
	Name?: string = '';
	Domain?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<AddServiceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
