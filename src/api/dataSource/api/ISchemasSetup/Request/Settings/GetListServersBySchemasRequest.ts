import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListServersBySchemasRequest  {
	SchemaId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListServersBySchemasRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
