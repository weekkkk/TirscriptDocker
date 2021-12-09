

export default class CreateContainerRequest  {
	PublishServerId?: number = null;
	MainProjectId: number = 0;
	ImageId: number = 0;
	ServiceId: number = 0;
	ReleaseServerId: number = 0;
	constructor(obj?: Partial<CreateContainerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
