

export default class EditRegistryRequest  {
	Id: number = 0;
	Url?: string = '';
	Login?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<EditRegistryRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
