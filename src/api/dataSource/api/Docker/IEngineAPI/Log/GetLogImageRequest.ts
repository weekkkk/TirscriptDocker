

export default class GetLogImageRequest  {
	ImageId: number = 0;
	constructor(obj?: Partial<GetLogImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
