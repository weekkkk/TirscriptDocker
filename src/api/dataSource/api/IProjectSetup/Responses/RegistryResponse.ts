

export default class RegistryResponse  {
	Id: number = 0;
	Url?: string = '';
	Login?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<RegistryResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
