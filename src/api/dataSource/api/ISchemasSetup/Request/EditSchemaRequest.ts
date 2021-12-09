

export default class EditSchemaRequest  {
	Id: number = 0;
	Name?: string = '';
	Description?: string = '';
	IdServer: number = 0;
	constructor(obj?: Partial<EditSchemaRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
