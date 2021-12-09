import GetServiceResponse from '../../IServiceSetup/Response/GetServiceResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListServiceResponse  {
	Items: Array<GetServiceResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListServiceResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
