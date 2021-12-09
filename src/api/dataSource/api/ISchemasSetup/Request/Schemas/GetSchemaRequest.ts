

export default class GetSchemaRequest  {
	SchemaId: number = 0;
	constructor(obj?: Partial<GetSchemaRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
