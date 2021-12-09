

export default class RemoveSchemaRequest  {
	SchemaId: number = 0;
	constructor(obj?: Partial<RemoveSchemaRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
