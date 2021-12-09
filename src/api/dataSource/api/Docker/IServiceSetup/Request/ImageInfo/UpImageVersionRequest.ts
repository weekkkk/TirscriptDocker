

export default class UpImageVersionRequest  {
	ServiceId: number = 0;
	UpVersion?: string = '';
	CreateNewImageInfo: boolean = false;
	constructor(obj?: Partial<UpImageVersionRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
