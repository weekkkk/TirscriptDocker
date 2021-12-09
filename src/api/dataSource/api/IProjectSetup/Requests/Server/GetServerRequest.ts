

export default class GetServerRequest  {
	ServerId: number = 0;
	constructor(obj?: Partial<GetServerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
