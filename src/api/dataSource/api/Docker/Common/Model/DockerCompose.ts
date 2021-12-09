

export default class DockerCompose  {
	ASPNETVersion?: string = '';
	SDKVersion?: string = '';
	Branch?: string = '';
	Git?: string = '';
	CsProj?: string = '';
	Sln?: string = '';
	Dll?: string = '';
	UnitTest?: string = '';
	constructor(obj?: Partial<DockerCompose>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
