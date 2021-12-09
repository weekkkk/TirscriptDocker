

export default class GetImageInfoResponse  {
	Id: number = 0;
	Name?: string = '';
	Dockerfile?: string = '';
	Description?: string = '';
	Version?: string = '';
	IsActive: boolean = false;
	DateCreate: Date = null;
	constructor(obj?: Partial<GetImageInfoResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
