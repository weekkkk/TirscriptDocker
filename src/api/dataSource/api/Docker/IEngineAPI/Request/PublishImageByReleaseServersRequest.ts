

export default class PublishImageByReleaseServersRequest  {
	MainProjectId: number = 0;
	ServiceId: number = 0;
	ImageId: number = 0;
	ReleaseServerId: Array<number> = null;
	constructor(obj?: Partial<PublishImageByReleaseServersRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
