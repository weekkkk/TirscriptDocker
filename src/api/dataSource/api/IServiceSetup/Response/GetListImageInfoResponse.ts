import GetImageInfoResponse from '../../IServiceSetup/Response/GetImageInfoResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListImageInfoResponse  {
	Items: Array<GetImageInfoResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListImageInfoResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
