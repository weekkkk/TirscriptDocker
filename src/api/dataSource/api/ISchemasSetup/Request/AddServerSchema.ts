

export default class AddServerSchema  {
	IdServer: number = 0;
	IdSchema: number = 0;
	constructor(obj?: Partial<AddServerSchema>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
