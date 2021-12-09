

export default class BuildImageRequest  {
	MainProjectId: number = 0;
	ImageId: number = 0;
	constructor(obj?: Partial<BuildImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
