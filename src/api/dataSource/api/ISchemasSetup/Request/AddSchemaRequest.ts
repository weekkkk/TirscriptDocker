

export default class AddSchemaRequest  {
	IdService: number = 0;
	Name?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<AddSchemaRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
