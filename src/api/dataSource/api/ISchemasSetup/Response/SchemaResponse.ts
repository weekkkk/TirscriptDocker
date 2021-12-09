

export default class SchemaResponse  {
	Id: number = 0;
	Name?: string = '';
	Description?: string = '';
	IsActive: boolean = false;
	constructor(obj?: Partial<SchemaResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
