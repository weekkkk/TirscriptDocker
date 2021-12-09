

export default class GetServiceResponse  {
	Id: number = 0;
	Name?: string = '';
	Domain?: string = '';
	Description?: string = '';
	constructor(obj?: Partial<GetServiceResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
