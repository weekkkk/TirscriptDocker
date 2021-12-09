

export default class SchemaServerResponse  {
	ReleaseServerId: number = 0;
	SchemaId: number = 0;
	ServerId: number = 0;
	SchemaName?: string = '';
	ServerName?: string = '';
	ServerIp?: string = '';
	ServerPort?: string = '';
	constructor(obj?: Partial<SchemaServerResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
