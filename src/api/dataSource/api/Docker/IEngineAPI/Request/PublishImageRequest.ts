

export default class PublishImageRequest  {
	ServiceId: number = 0;
	ImageId: number = 0;
	ReleaseServerId: number = 0;
	PublishServerId: number = 0;
	MainProjectId: number = 0;
	constructor(obj?: Partial<PublishImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
