import DockerCompose from '../../Docker/Common/Model/DockerCompose';

export default class AddImageInfoRequest  {
	ServiceId: number = 0;
	Name?: string = '';
	Description?: string = '';
	Version?: string = '';
	Dockerfile?: string = '';
	DockerArg: DockerCompose = null;
	constructor(obj?: Partial<AddImageInfoRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
