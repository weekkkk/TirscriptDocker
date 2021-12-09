

export default class DownloadDockerfileRequest  {
	IdImage: number = 0;
	constructor(obj?: Partial<DownloadDockerfileRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
