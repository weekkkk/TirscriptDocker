

export default class AuthorizationRequest  {
	Id: number = 0;
	Email?: string = '';
	FullName?: string = '';
	Roles: Array<string> = null;
	constructor(obj?: Partial<AuthorizationRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
