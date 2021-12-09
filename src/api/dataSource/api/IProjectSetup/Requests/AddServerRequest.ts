

export default class AddServerRequest  {
	RegistryId: number = 0;
	Name?: string = '';
	Ip?: string = '';
	Port?: string = '';
	Login?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<AddServerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
