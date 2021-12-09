

export default class DockerfileResponse  {
	IdImage: number = 0;
	DockerfileData?: string = '';
	constructor(obj?: Partial<DockerfileResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
