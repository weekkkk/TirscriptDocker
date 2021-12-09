

export default class EditServerRequest  {
	Id: number = 0;
	Name?: string = '';
	Ip?: string = '';
	Port?: string = '';
	Login?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<EditServerRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
