

export default class ServerResponse  {
	Id: number = 0;
	Name?: string = '';
	Ip?: string = '';
	Port?: string = '';
	constructor(obj?: Partial<ServerResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
