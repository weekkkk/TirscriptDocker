import SchemaResponse from '../../ISchemasSetup/Response/SchemaResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListSchemasResponse  {
	Items: Array<SchemaResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListSchemasResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
