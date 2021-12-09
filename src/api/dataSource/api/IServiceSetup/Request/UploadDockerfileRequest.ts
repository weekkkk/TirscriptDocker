

export default class UploadDockerfileRequest  {
	IdImage: number = 0;
	Dockerfile?: string = '';
	constructor(obj?: Partial<UploadDockerfileRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
