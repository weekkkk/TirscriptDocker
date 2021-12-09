

export default class StartContainerManuallyRequest  {
	ContainerName?: string = '';
	ServerId: number = 0;
	constructor(obj?: Partial<StartContainerManuallyRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
