

export default class PublishImageBySchemaRequest  {
	MainProjectId: number = 0;
	ServiceId: number = 0;
	ImageId: number = 0;
	SchemaId: Array<number> = null;
	constructor(obj?: Partial<PublishImageBySchemaRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
