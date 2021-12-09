import SchemaServerResponse from '../../ISchemasSetup/Response/SchemaServerResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListServerResponse  {
	Items: Array<SchemaServerResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListServerResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
