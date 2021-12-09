

export default class GetImageRequest  {
	ImageId: number = 0;
	constructor(obj?: Partial<GetImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
