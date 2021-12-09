import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListSchemasRequest  {
	ServiceId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListSchemasRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
