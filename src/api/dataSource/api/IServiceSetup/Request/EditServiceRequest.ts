

export default class EditServiceRequest  {
	Id: number = 0;
	Name?: string = '';
	Domain?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<EditServiceRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
