

export default class RemoveImageRequest  {
	ImageId: number = 0;
	constructor(obj?: Partial<RemoveImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
