import ServerResponse from '../../IProjectSetup/Responses/ServerResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListProjectServerResponse  {
	Items: Array<ServerResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListProjectServerResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
